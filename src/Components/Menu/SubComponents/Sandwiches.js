import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class Sandwiches extends Component {
  constructor(props){
    super(props);
    this.state = {
      mapped: null
    }
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'MOUNT_NAV',
      value: 'Sandwiches'
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
  componentWillReceiveProps(){
    axios.get(process.env.REACT_APP_DEFAULT+'/getSandwiches').then((res)=>{
      let mapped = res.data.map((key)=>{
        return (
          <container className='sandwiches_container'>
            <div 
              className='sandwiches' 
              id={key.table_name + '_' + key.id}>
            </div>
            <div className='info_sandwich_container'>
              <div>{key.name} Sandwich</div>
              <div>${key.price}</div>
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

export default connect()(Sandwiches)