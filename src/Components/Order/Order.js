import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Power4, TimelineMax } from 'gsap'
import './Order.css';

class Order extends Component {
  componentDidMount(){
    this.props.dispatch({
      type: 'MOUNT_COMPONENT',
      value: 'order_link'
    })
  }
  backUp(){
    let tl = new TimelineMax();
    tl.to('#main_section', 1, {marginTop: 0, ease: Power4.easeOut})
  }
  render(){
    return(
      <section className='order_section'>
        <nav className='component_nav'>
          <div onClick={(e)=>{this.backUp()}} className='deliwin_image'/>
          <h1 className='component_nav_text'>Order </h1>
        </nav>
      </section>
    )
  }
}

export default connect()(Order)