import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Power4, TimelineMax } from 'gsap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import TakeMoney from './SubComponents/Stripe'
import './Order.css';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapped: null,
      cartItemNum: 0,
      totalPrice:0,
    }
    this.onClosed = this.onClosed.bind(this)
  }
  componentDidMount(){
    this.props.dispatch({
      type: 'MOUNT_COMPONENT',
      value: 'order_link'
    });
    this.renderCart()  
  }
  componentWillReceiveProps() {
    setTimeout(()=>{
      this.renderCart();
    },50)
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
        <container className='order_item_container'>
          <div onClick={(e)=>this.deleteItem(key.name)} className='delete_icon'/>
          <div>{key.tableName}</div>
          <div>{key.name}</div>
          <div>${key.price}</div>
        </container>
      )
    })
    let count = 0;
    for (var i = 0; i < this.props.cart.length; i++) {
      count++;
    }
    let totalPrice = 0;
    for (var i = 0; i < this.props.cart.length; i++) {
      totalPrice += parseFloat(this.props.cart[i].price)
    }
    this.setState({
      mapped: mapped,
      cartItemNum:count,
      totalPrice,
    })
  }
  backUp(){
    let tl = new TimelineMax();
    tl.to('#main_section', 1, {marginTop: 0, ease: Power4.easeOut})
  }
  onClosed() {
    this.props.history.push('/About')
  }
  render(){
    console.log(this)
    return(
      <section className='order_section'>
        <nav className='component_nav'>
          <div onClick={(e)=>{this.backUp()}} className='deliwin_image'/>
          <h1 className='component_nav_text'>Order </h1>
        </nav>
        <container className='order_container'>
          <column className='address_column'>
          <div className='input_text_container'> 
            <h1 className='title_form_text'>First Name</h1>
            <h1 className='title_form_text'>Last Name</h1>
          </div>
          <div className='name_info'>
            <input className='first' type='text' value='John'/>
            <input className='last' type='text' value='Doe'/>
          </div>
          <div className='input_text_container'> 
            <h1 className='title_form_text'>Email</h1>
            <h1 className='title_form_text'>Phone Number</h1>
          </div>
          <div className='contact_info'>
            <input className='email' type='text' value='deliwin@gmail.com'/>
            <input className='phone' type='text' value='(470)-258-9107'/>
          </div>
          <h1 className='title_form_text'>Address</h1>
          <textarea className='address' rows={5} cols={40} value='123 christopher drive'/>
          <div className='input_text_container'> 
            <h1 className='title_form_text'>State</h1>
            <h1 className='title_form_text'>City</h1>
            <h1 className='title_form_text'>Zip Code</h1>
          </div>
          <div className='location'>
            <input className='state' type='text' value='Utah'/>
            <input className='city' type='text' value='Provo'/>
            <input className='zip_code' type='text' value='84601'/>
          </div>
          </column>

          <column className='item_column'>
          <div className='item_column_title'>
            <div>Remove</div>
            <div>Type</div>
            <div>Name</div>
            <div>Price</div>
          </div>
            <div className='red_line'/>
            {this.state.mapped}
          </column>
          <column className='payment_column'>
            <container className='review_container'>
              <div className='total_items'>You have {this.state.cartItemNum} items in your cart.</div>
            </container>
            <container className='total_container'>
              <div>
              <div className='subtotal'> 
                <div> SubTotal </div>
                <div>${Math.ceil(this.state.totalPrice * 100) / 100} </div>
              </div>
              <div className='total'>
                <div>GRAND TOTAL</div> 
                <div>${Math.ceil((this.state.totalPrice * 1.05) * 100) / 100}</div>
              </div>
              </div>
              <TakeMoney onClosed={this.onClosed}/>
            </container>
          </column>
        </container>
      </section>
    )
  }
}
function mapStateToProps(state) {
  return {
    cart:state.cart
  }
}
export default connect(mapStateToProps)(withRouter(Order))