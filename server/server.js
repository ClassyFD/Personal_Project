//requiring dotenv so that it works with all of your settings.
require('dotenv').config();

//setting all of your variables.
const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      port = 3001,
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      session = require('express-session'),
      app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//app will be able to use sessions.
app.use(session({
  secret:'mysupersecretsecret',
  resave: false,
  saveUninitialized: true
}))




//here starts the auth0 stuff.
app.use(passport.initialize());
app.use(passport.session());

//where you get all of the user information.
passport.use(new Auth0Strategy({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done){
  console.log(profile);
  done(null, profile)
}));

//run it twice so that the second time, it checks if the user was authenticated or not.
app.get('/auth', passport.authenticate('auth0'));

//redirect your user if it was successful or not.
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/',
  failureRedirect: 'http://localhost:3000/'
}))

passport.serializeUser(function(user, done){
  done(null, user);
});
passport.deserializeUser(function(user, done){
  done(null, obj);
});

app.get('/auth/me', (req, res, next)=>{
  if (!req.user){
    return res.status(404).send('User not found');
  } else {
    return res.status(200).send(req.user);
  }
})

app.get('auth/logout', (req, res)=>{
  req.logOut();
  return res.redirect(302, 'http://localhost:3000/')
})


//listen to the ports.
app.listen(port, ()=>console.log(`Listening on port: ${port}`))