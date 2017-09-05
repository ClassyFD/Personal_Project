import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Power4, TimelineMax } from 'gsap';
import Container from './SubComponents/Container';
import './Cafes.css';

class Cafes extends Component {
  componentDidMount(){
    this.props.dispatch({
      type: 'MOUNT_COMPONENT',
      value: 'cafes_link'
    })
  }
  backUp(){
    let tl = new TimelineMax();
    tl.to('#main_section', 1, {marginTop: 0, ease: Power4.easeOut})
  }
  render(){
    return(
      <section id='cafes_section' className='cafes_section'>
        <nav className='component_nav'>
          <div onClick={(e)=>{this.backUp()}} className='deliwin_image'/>
          <h1 className='component_nav_text'>Cafes Near You </h1>
        </nav>
        <container className='map'>
            <Container/>
        </container>
        <div className='cafe_near_you_list'> 
          <h1 className='cafes_near_you_text_2'>The Cafes closest to you are:</h1>
        </div>
      </section>
    )
  }
}

export default connect()(Cafes)