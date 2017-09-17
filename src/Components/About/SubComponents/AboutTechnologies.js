import React, { Component } from 'react';
export default class AboutTechnologies extends Component {
  render(){
    return(
      <section>
        <container className='technologies_title_container'>
          <h1 className='technologies_title'> Technologies </h1>
        </container>
        <div className='separating_line'/>
        <container className='technologies'> 
          <li id='HTML'/>
          <li id='CSS'/>
          <li id='ES6'/>
          <li id='Redux'/>
          <li id='GSAP'/>
          <li id='Parallax'/>
          <li id='NodeJS'/>
          <li id='Express'/>
          <li id='Stripe'/>
          <li id='Auth0'/>
          <li id='Google_Maps_Api'/>
        </container>
        <div className='separating_line' />
        <container className='technologies_title_container'>
          <h1 className='technologies_title'> Used </h1>
        </container>
      </section>
    )
  }
}