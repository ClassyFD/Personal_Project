import React, { Component } from 'react';
import ParallaxHover from 'react-parallax-hover';

export default class ContactCard extends Component {
  render(){
    return (
      <container className='parallax_hover'> 
        <ParallaxHover  borderRadius={20} width={500} height={280} rotation={4} shadow={9} scale={9} shine={1.5} speed={100}>
          <div className='parallax_inside_hover'>
            <div className='parallax_inside_image'/>
            <ul className='contact_list'>
              <li>Phone Number: 123-456-7890</li>
              <li>Email: deliwin@gmail.com</li>
              <li>Or leave a comment with our form!</li>
            </ul>  
          </div>
        </ParallaxHover>
      </container>
    )
  }
}