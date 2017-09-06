import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Power4, TimelineMax } from 'gsap'
import './About.css'
class About extends Component {
  componentDidMount(){
    this.props.dispatch({
      type: 'MOUNT_COMPONENT',
      value: 'about_link'
    })
  }
  backUp(){
    let tl = new TimelineMax();
    tl.to('#main_section', 1, {marginTop: 0, ease: Power4.easeOut})
  }
  render(){
    return (
      <section className='about_section'>
        <nav className='component_nav'>
          <div onClick={(e)=>{this.backUp()}} className='deliwin_image'/>
          <h1 className='component_nav_text'>About </h1>
        </nav>
        <container className='technologies_title_container'>
          <h1 className='technologies_title'> Technologies </h1>
        </container>
        <div className='separating_line'/>
        <container className='technologies'> 
          <li id='HTML'></li>
          <li id='CSS'></li>
          <li id='ES6'></li>
          <li id='Redux'></li>
          <li id='GSAP'></li>
          <li id='NodeJS'></li>
          <li id='Express'></li>
          <li id='Stripe'></li>
          <li id='Auth0'></li>
          <li id='Google_Maps_Api'></li>
        </container>
        <div className='separating_line' />
        <container className='technologies_title_container'>
          <h1 className='technologies_title'> Used </h1>
        </container>
      </section>
    )
  }
}

export default connect()(About)