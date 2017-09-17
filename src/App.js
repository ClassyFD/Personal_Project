import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Main from './Components/Main/Main'
import About from './Components/About/About'
import Order from './Components/Order/Order'
import Contact from './Components/Contact/Contact'
import Menu from './Components/Menu/Menu'
import Cafes from './Components/Cafes/Cafes'
import Store from './Components/Store/Store'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'

class App extends Component {
  render() {
    return (
      <section className='everything'>
        <Main/>
        <container className='app_bottom_container'>
          <Nav/>
          <Switch>
            <Route exact path='/' render={()=>{
              return (
                <Redirect to='/About'/>
              )
            }} />
            <Route path='/About' component={About}/>
            <Route path='/Order' component={Order}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/Menu' component={Menu}/>
            <Route path='/Cafes' component={Cafes}/>
            <Route path='/Store' component={Store}/>
          </Switch>
        </container>
        <ShoppingCart/>
      </section>
    );
  }
}

export default App;
