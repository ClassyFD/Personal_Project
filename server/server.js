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
      massive = require('massive'),
      app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

massive({
  host: 'ec2-23-23-220-163.compute-1.amazonaws.com',
  port: 5432,
  database: 'dfcvtg2jnfuaht',  
  user: 'ltjwbbapdbrjpu',
  password: 'b51868fe1afae27332ad0ac6bef82722cf4dce6624e8dfbf759aee0a09227b51',
  ssl:true,
}).then((db)=>{
  app.set('db', db);
})

app.get('/getSandwiches', (req, res)=>{
  let db = app.get('db');
  db.getSandwiches().then((sandwiches)=>{
    res.status(200).send(sandwiches);
  });
});
app.get('/getSides', (req, res)=>{
  let db = app.get('db');
  db.getSides().then((sides)=>{
    res.status(200).send(sides);
  });
});

//bread filter
  app.get('/getAllBread', (req, res)=>{
    let db = app.get('db');
    db.getAllBread().then((bread)=>{
      res.status(200).send(bread);
    });
  });
  app.get('/getHispanicBread', (req, res)=>{
    let db = app.get('db');
    db.getHispanicBread().then((bread)=>{
      res.status(200).send(bread);
    });
  });
  app.get('/getVietnameseBread', (req, res)=>{
    let db = app.get('db');
    db.getVietnameseBread().then((bread)=>{
      res.status(200).send(bread);
    });
  });

//sauces filter
  app.get('/getAllSauces', (req, res)=>{
    let db = app.get('db');
    db.getAllSauces().then((sauces)=>{
      res.status(200).send(sauces);
    });
  });
  app.get('/getSweetSauces', (req, res)=>{
    let db = app.get('db');
    db.getSweetSauces().then((sauces)=>{
      res.status(200).send(sauces);
    });
  });
  app.get('/getClassicSauces', (req, res)=>{
    let db = app.get('db');
    db.getClassicSauces().then((sauces)=>{
      res.status(200).send(sauces);
    });
  });

//drinks filter
app.get('/getAllDrinks', (req, res)=>{
  let db = app.get('db');
  db.getAllDrinks().then((drinks)=>{
    res.status(200).send(drinks);
  });
});
app.get('/getColdDrinks', (req, res)=>{
  let db = app.get('db');
  db.getColdDrinks().then((drinks)=>{
    res.status(200).send(drinks);
  });
});
app.get('/getHotDrinks', (req, res)=>{
  let db = app.get('db');
  db.getHotDrinks().then((drinks)=>{
    res.status(200).send(drinks);
  });
});
app.get('/getOtherDrinks', (req, res)=>{
  let db = app.get('db');
  db.getOtherDrinks().then((drinks)=>{
    res.status(200).send(drinks);
  });
});

//app will be able to use sessions.
app.use(session({
  secret:'secret',
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
}, (accessToken, refreshToken, extraParams, profile, done)=>{
  done(null, profile)
}));
passport.serializeUser((user, done)=>{
  done(null, user);
});
passport.deserializeUser((obj, done)=>{
  console.log(obj)
  console.log('test')
  done(null, obj);
});

//run it twice so that the second time, it checks if the user was authenticated or not.
app.get('/auth', passport.authenticate('auth0'));

//redirect your user if it was successful or not.
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/Order',
  failureRedirect: 'http://localhost:3000/About'
}))


app.get('/auth/me', (req, res)=>{
  console.log(req.session.user)
  if (!req.user) {
    res.status(404).send('User not found');
  } else {
    res.status(200).send(req.user);
  }
})

app.get('/auth/logout', (req, res)=>{
  req.logOut();
  return res.redirect(302, 'http://localhost:3000/')
})


//listen to the ports.
app.listen(port, ()=>console.log(`Listening on port: ${port}`))