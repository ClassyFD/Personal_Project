import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TimelineMax, Power4 } from 'gsap';
import { Link } from 'react-router-dom'
import './ShoppingCart.css';

class ShoppingCart extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartExpanded:false,
      mapped:this.props.cart,
    }
  }

  componentWillReceiveProps() {
    setTimeout(()=>{
      this.renderCart();
    },50)
  }

  expandCart(event) {
    this.renderCart();
    this.setState({
      cartExpanded:this.state.cartExpanded? false : true
    })
    let tl = new TimelineMax();
    this.state.cartExpanded? 
    tl.to('.shopping_cart_contents_container', 1, {height: '0px', display:'none'})
      .to(event.target, 1, {width: '100px'}) :
    tl.to(event.target, 1, {width: '200px'})
      .to('.shopping_cart_contents_container', 1, {height: '300px', display: 'block'})
  }
  deleteItem(item) {
    this.props.dispatch({
      type: 'DELETE_ITEM',
      item
    })
  }
  renderCart() {
    let mapped = this.props.cart.map((key)=>{
      return (
        <container onClick={(e)=>this.deleteItem(key.name)} className='cart_container'>
          <div>{key.name}</div>
          <div>${key.price}</div>
        </container>
      )
    })
    this.setState({
      mapped: mapped,
    })
  }
  changeComponent() {
    this.props.dispatch({
      type: 'MOUNT_COMPONENT',
      value:'order_link'
    })
  }
  render() {
    return (
      <section className='shopping_cart_section'>
        <container onClick={(e)=>{this.expandCart(e)}} className='shopping_cart_title_container'> 
          Cart
        </container>
        <container className='shopping_cart_contents_container'>
          <div className='cart_container_title'> 
            <div>Name</div>
            <div>Price</div>
          </div>
          <div className='line'/>
          {this.state.mapped}
          <div className='line'/>
          <div className='checkout'>
            <Link onClick={(e)=>this.changeComponent()} to='/Order'><div className='checkout_icon'/></Link>
          </div>
        </container>
      </section>
    )
  }
}
function mapStateToProps(state) {
  return {
    cart:state.cart,
  }
}
export default connect(mapStateToProps)(ShoppingCart);