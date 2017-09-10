import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Power4, TimelineMax } from 'gsap';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import AboutTechnologies from './SubComponents/AboutTechnologies';
import AboutDescription from './SubComponents/AboutDescription';
import './About.css';

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
          <Link className='component_nav_technologies' to='/About'>
            <h1>Tech Used</h1>
          </Link>
          <Link className='component_nav_store_description' to='/About/Description'>
            <h1> Store Description </h1>
          </Link>
        </nav>
        <Switch>
          <Route exact path='/About' component={AboutTechnologies}/>
          <Route path='/About/Description' component={AboutDescription}/>
        </Switch>
      </section>
    )
  }
}
export default connect()(About)