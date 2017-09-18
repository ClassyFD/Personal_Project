import React, { Component } from 'react';
import './Nav.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TimelineMax, Power4 } from 'gsap';
import { connect } from 'react-redux';
class Nav extends Component {
  componentDidMount(){
      let tl = new TimelineMax();
    setTimeout(()=>{
      tl.to('#' + this.props.mountedComponent, 1, {margin:0, ease: Power4.easeOut})
      document.getElementById(this.props.mountedComponent).classList.add('active')  
    },500)
    setTimeout(()=>{
        tl.to('#nav_section', 1, {marginLeft:'-320px'})
    },500)
  }
  hoverNav(e){
    let tl = new TimelineMax();
    if (!document.getElementById(e.target.id).classList.contains('active')){
      tl.to(e.target, 1, {margin:0, ease: Power4.easeOut})  
    }
  }
  leaveNav(e){
    let tl = new TimelineMax();
    if (!document.getElementById(e.target.id).classList.contains('active')){
      tl.to(e.target, 1, {marginLeft:-49, ease: Power4.easeOut})
    }
  }
  hoverNavSection(){
    let tl = new TimelineMax();
      tl.to('#nav_section', 1, {marginLeft: '0'})
  }
  leaveNavSection(){
    let tl = new TimelineMax();
      tl.to('#nav_section', 1, {marginLeft: '-320px'})
  }
  clickNav(e){
    let tl = new TimelineMax();
    const newElements = document.getElementsByClassName('nav_link');
    document.getElementById(e.target.id).classList.add('active')
    for (var i = 0; i < newElements.length; i++) {
      if (newElements[i].classList.contains('active') && newElements[i] !== document.getElementById(e.target.id)) {
        newElements[i].classList.remove('active');
        tl.to(newElements[i], 1, {marginLeft:-49, ease: Power4.easeOut})
      }
    }
  }
  render(){
    return(
      <section onMouseEnter={(e)=>{this.hoverNavSection()}} onMouseLeave={(e)=>{this.leaveNavSection(e)}} id='nav_section'>
        <nav className='nav hide_nav'>
          <Link onClick={(e)=>{this.clickNav(e)}} onMouseEnter={(e)=>{this.hoverNav(e)}} onMouseLeave={(e)=>{this.leaveNav(e)}} id='about_link' className='nav_link' to='/About'>About</Link>
          <Link onClick={(e)=>{this.clickNav(e)}} onMouseEnter={(e)=>{this.hoverNav(e)}} onMouseLeave={(e)=>{this.leaveNav(e)}} id='order_link' className='nav_link' to='/Order'>Checkout</Link>
          <Link onClick={(e)=>{this.clickNav(e)}} onMouseEnter={(e)=>{this.hoverNav(e)}} onMouseLeave={(e)=>{this.leaveNav(e)}} id='contact_link' className='nav_link' to='/Contact'>Contact</Link>
          <Link onClick={(e)=>{this.clickNav(e)}} onMouseEnter={(e)=>{this.hoverNav(e)}} onMouseLeave={(e)=>{this.leaveNav(e)}} id='menu_link' className='nav_link' to='/Menu'>Menu</Link>
          <Link onClick={(e)=>{this.clickNav(e)}} onMouseEnter={(e)=>{this.hoverNav(e)}} onMouseLeave={(e)=>{this.leaveNav(e)}} id='cafes_link' className='nav_link' to='/Cafes'>Cafes Near You</Link>
          <Link onClick={(e)=>{this.clickNav(e)}} onMouseEnter={(e)=>{this.hoverNav(e)}} onMouseLeave={(e)=>{this.leaveNav(e)}} id='store_link' className='nav_link' to='/Store'>Open a Store</Link>
          <a onMouseEnter={(e)=>{this.hoverNav(e)}} onMouseLeave={(e)=>{this.leaveNav(e)}} className='a_tag' href={process.env.REACT_APP_LOGIN}><button id='login_link' className='nav_link'>Log in</button></a>
        </nav>
      </section>
    )
  }
}
function mapStateToProps(state){
  return {
    mountedComponent: state.mountedComponent
  }
}
export default connect(mapStateToProps)(Nav)