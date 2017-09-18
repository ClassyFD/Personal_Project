import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'

class TakeMoney extends Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
  calculateMoney() {
    let totalPrice = 0;
    for (var i = 0; i < this.props.cart.length; i++) {
      totalPrice += parseFloat(this.props.cart[i].price)
    }
    return (Math.ceil((totalPrice * 1.05) * 100) / 100) * 100
  }
  
  render() {
    return (
      <StripeCheckout
        name="Deliwin"
        description="We appreciate your business."
        image="https://image.ibb.co/cdmstk/Deliwin_stripe.png"
        currency="USD"
        amount={this.calculateMoney()}
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        billingAddress={true}
        closed={this.props.onClosed}
      />
    )
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps)(TakeMoney);