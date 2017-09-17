import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Power4, TimelineMax } from 'gsap';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Sandwiches from './SubComponents/Sandwiches';
import Drinks from './SubComponents/Drinks';
import Bread from './SubComponents/Bread';
import Sauces from './SubComponents/Sauces';
import Sides from './SubComponents/Sides'
import './Menu.css';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      mountedNav: this.props.mountedNav,
    }
  }
  componentDidMount(){
    this.props.dispatch({
      type: 'MOUNT_COMPONENT',
      value: 'menu_link'
    })
    this.updateComponent();
    let tl = new TimelineMax();
    tl.to(
      this.props.location.pathname === '/Menu/Bread'?'.bread_icon':
      this.props.location.pathname === '/Menu/Drinks'?'.drink_icon':
      this.props.location.pathname === '/Menu/Sauces'?'.sauce_icon':
      this.props.location.pathname === '/Menu/Sides'?'.side_icon':'.sandwich_icon',
    0, {backgroundColor:'white'} )
  }
  sortDrinks(val, event) {
    this.props.dispatch({
      type: 'SORT_DRINKS',
      value: val,
    })
    this.updateComponent();
  }
  sortSauces(val, event) {
    this.props.dispatch({
      type: 'SORT_SAUCES',
      value: val,
    })
    this.updateComponent()
    }
  sortBread(val, event) {
    this.props.dispatch({
      type: 'SORT_BREAD',
      value: val,
    })
    this.updateComponent()
  }
  updateComponent(event){
    if (event) {
      let tl = new TimelineMax();
      tl.to('.food_nav li', 1, {backgroundColor: 'gray', ease: Power4.easeOut}) 
        .to(event.target, 1, {backgroundColor:'white', ease: Power4.easeOut}, '-=1') 
    }
    setTimeout(()=>{
      let dtl = new TimelineMax();
      let btl = new TimelineMax();
      let stl = new TimelineMax();
      let swtl = new TimelineMax();
      let sdtl = new TimelineMax();
      let mountedNav = (
      this.props.mountedNav==='Drinks'?
      <nav>
        <li className='all_drinks drink_nav_options' id='all_drinks' onClick={(e)=>{this.sortDrinks('allDrinks', e)}}>All Drinks</li>
        <li className='hot_drinks drink_nav_options' onClick={(e)=>{this.sortDrinks('hotDrinks', e)}}>Hot Drinks</li>
        <li className='cold_drinks drink_nav_options' onClick={(e)=>{this.sortDrinks('coldDrinks', e)}}>Cold Drinks</li>
        <li className='other_drinks drink_nav_options' onClick={(e)=>{this.sortDrinks('otherDrinks', e)}}>Fountain Drinks</li>
      </nav> :
      this.props.mountedNav==='Sauces'?
      <nav>
        <li className='all_sauces sauce_nav_options' id='all_sauces' onClick={(e)=>{this.sortSauces('allSauces', e)}}>All Sauces</li>
        <li className='sweet_sauces sauce_nav_options' onClick={(e)=>{this.sortSauces('sweetSauces', e)}}>Sweet Sauces</li>
        <li className='classic_sauces sauce_nav_options' onClick={(e)=>{this.sortSauces('classicSauces', e)}}>Classic Sauces</li>
      </nav> : 
      this.props.mountedNav==='Bread'?
      <nav>
        <li className='all_bread bread_nav_options' id='all_bread' onClick={(e)=>{this.sortBread('allBread', e)}}>All Bread</li>
        <li className='hispanic_bread bread_nav_options' onClick={(e)=>{this.sortBread('hispanicBread', e)}}>Hispanic Bread</li>
        <li className='vietnamese_bread bread_nav_options' onClick={(e)=>{this.sortBread('vietnameseBread', e)}}>Vietnamese Bread</li>
      </nav> : 
      this.props.mountedNav==='Sandwiches'?
      <nav>
        <li className='sandwich_nav_options' id='all_sandwiches'>All Sandwiches</li>
      </nav> :
      this.props.mountedNav==='Sides'?
      <nav>
        <li className='side_nav_options' id='all_sides'>All Sides</li>
      </nav>:
      <nav>
      </nav>
      )
      this.setState({
        mountedNav:mountedNav
      })
      dtl.to('.drink_nav_options', 1, {backgroundColor:'gray', ease:Power4.easeOut})
        .to(
          this.props.sortedDrinks === 'coldDrinks'?'.cold_drinks':
          this.props.sortedDrinks === 'hotDrinks'?'.hot_drinks':
          this.props.sortedDrinks === 'otherDrinks'?'.other_drinks':'.all_drinks',
        1, {backgroundColor:'white', ease:Power4.easeOut}, '-=1' 
      )
      btl.to('.bread_nav_options', 1, {backgroundColor:'gray', ease:Power4.easeOut})
        .to(
          this.props.sortedBread === 'hispanicBread'?'.hispanic_bread':
          this.props.sortedBread === 'vietnameseBread'?'.vietnamese_bread':'.all_bread',
        1, {backgroundColor:'white', ease: Power4.easeOut}, '-=1'
      )
      stl.to('.sauce_nav_options', 1, {backgroundColor:'gray', ease:Power4.easeOut})
        .to(
          this.props.sortedSauces === 'sweetSauces'?'.sweet_sauces':
          this.props.sortedSauces === 'classicSauces'?'.classic_sauces':'.all_sauces',
        1, {backgroundColor:'white', ease: Power4.easeOut}, '-=1'
      )
      swtl.to( '.sandwich_nav_options', 1, {backgroundColor:'white', ease: Power4.easeOut}, '-=1')
      sdtl.to( '.side_nav_options', 1, {backgroundColor:'white', ease: Power4.easeOut}, '-=1')
    },100)
  }
  backUp(){
    let tl = new TimelineMax();
    tl.to('#main_section', 1, {marginTop: 0, ease: Power4.easeOut})
  }
  render(){
    return(
      <section className='menu_section'>
        <nav className='component_nav'>
          <div onClick={(e)=>{this.backUp()}} className='deliwin_image'/>
          <h1 className='component_nav_text'>Menu </h1>
        </nav>
        <container className='menu_container'>
        <nav className='food_nav'>
          <Link onClick={(e)=>this.updateComponent(e)} to='/Menu'><li className='sandwich_icon '></li></Link>
          <Link onClick={(e)=>this.updateComponent(e)} to='/Menu/Bread'><li className='bread_icon'></li></Link>
          <Link onClick={(e)=>this.updateComponent(e)} to='/Menu/Sides'><li className='side_icon'></li></Link>
          <Link onClick={(e)=>this.updateComponent(e)} to='/Menu/Drinks'><li className='drink_icon'></li></Link>
          <Link onClick={(e)=>this.updateComponent(e)} to='/Menu/Sauces'><li className='sauce_icon'></li></Link>
        </nav>
        <Switch>
          <Route exact path='/Menu' component={Sandwiches}/>
          <Route path='/Menu/Drinks' component={Drinks}/>
          <Route path='/Menu/Bread' component={Bread}/>
          <Route path='/Menu/Sauces' component={Sauces}/>
          <Route path='/Menu/Sides' component={Sides}/>
        </Switch>
        <nav className='food_nav_options'>
          {this.state.mountedNav}
        </nav>
        </container>
      </section>
    )
  }
}
function mapStateToProps(state){
  return{
    mountedNav: state.mountedNav,
    sortedDrinks: state.sortedDrinks,
    sortedBread: state.sortedBread,
    sortedSauces: state.sortedSauces,
  }
}
export default connect(mapStateToProps)(Menu)