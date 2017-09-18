import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Sauces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapped: null,
    }
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'MOUNT_NAV',
      value: 'Sauces'
    })
  }
  addToCart(tableName, name, price) {
    this.props.dispatch({
      type:'ADD_TO_CART',
      cartObj: {
        tableName,
        name,
        price
      }
    })
  }
  componentWillReceiveProps() {
    let filter = this.props.sortedSauces === 'sweetSauces'?
    'Sweet' : this.props.sortedSauces === 'classicSauces'?
    'Classic' : 'All';
    axios.get(process.env.REACT_APP_DEFAULT+'/get'+filter+'Sauces').then((res)=>{
      let mapped = res.data.map((key)=>{
        return (
          <container className='sauces_container'>
            <div 
              className='sauces' 
              id={key.table_name + '_' + key.id}>
            </div>
            <div className='info_sauces_container'>
              <div>{key.name}</div>
              <div>${key.price}</div>
              <div>{key.type===2? 'Sweet ' : 'Classic '}Sauce</div>
            </div>
            <div className='add_to_cart'> 
              <div onClick={(e)=>this.addToCart(key.table_name, key.name, key.price)} className='shopping_cart_icon'/>
            </div>
          </container>
        )      
      })
      this.setState({
        mapped: mapped
      })
    })    
  }
  render() {
    return (
      <div className='food'>
        {this.state.mapped}
      </div>    
    )
  }
}
function mapStateToProps(state) {
  return {
    sortedSauces: state.sortedSauces,
  }
}
export default connect(mapStateToProps)(Sauces)