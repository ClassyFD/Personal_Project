import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Power4, TimelineMax } from 'gsap';
import ContactCard from './SubComponents/ContactCard';
import ContactForm from './SubComponents/ContactForm';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import './Contact.css';

class Contact extends Component {
  componentDidMount(){
    this.props.dispatch({
      type: 'MOUNT_COMPONENT',
      value: 'contact_link'
    })
  }
  backUp(){
    let tl = new TimelineMax();
    tl.to('#main_section', 1, {marginTop: 0, ease: Power4.easeOut})
  }
  render(){
    return (
      <section className='contact_section'>
        <nav className='component_nav'>
          <div onClick={(e)=>{this.backUp()}} className='deliwin_image'/>
          <Link className='component_nav_contact_card' to='/Contact'>
            <h1 className='component_nav_text'> Card </h1>
          </Link>
          <Link className='component_nav_contact_form' to='/Contact/Form'>
            <h1 className='component_nav_text'> Form </h1>
          </Link>
        </nav>
        <Switch>
          <Route exact path='/Contact' component={ContactCard}/>
          <Route path='/Contact/Form' component={ContactForm}/>
        </Switch>
      </section>
    )
  }
}

export default connect()(Contact)