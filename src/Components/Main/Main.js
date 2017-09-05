import React, {Component} from 'react';
import './Main.css'
import {TimelineMax, Power4} from 'gsap'
class Main extends Component {
  componentDidMount() {
    let tl = new TimelineMax({
      repeat:-1,
      repeatDelay: 0,
      yoyo:true,
    })
    tl.to('#start_arrow', 1, {left: 20})
  }
  startPageAnimation(){
    let mainTL = new TimelineMax()
    mainTL.to('#main_section', 1, {marginTop: '-100vh', ease: Power4.easeOut})
  }
  render(){
    return (
      <section id='main_section' onClick={(e)=>{this.startPageAnimation()}} className='main_section'>
        <h1 id='deliwin' className='deliwin'> Deliwin <span id='start_arrow'> > </span></h1>
        <p id='cafe' className='cafe'> Cafe </p>
      </section>
    )
  }
}

export default Main