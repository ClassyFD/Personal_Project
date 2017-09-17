import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Bread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapped: null,
    }
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'MOUNT_NAV',
      value: 'Bread'
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
    let filter = this.props.sortedBread === 'hispanicBread'?
    'Hispanic' : this.props.sortedBread === 'vietnameseBread'?
    'Vietnamese' : 'All';
    axios.get('http://localhost:3001/get'+filter+'Bread').then((res)=>{
      let mapped = res.data.map((key)=>{
        return (
          <container className='bread_container'>
            <div 
              className='bread' 
              id={key.table_name + '_' + key.id}>
            </div>
            <div className='info_bread_container'>
              <div>{key.name}</div>
              <div>${key.price}</div>
              <div>{key.type===1?'Hispanic':'Vietnamese'}</div>
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
    sortedBread: state.sortedBread,
  }
}
export default connect(mapStateToProps)(Bread)