import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Drinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapped: null,
    }
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'MOUNT_NAV',
      value: 'Drinks'
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
    let filter = this.props.sortedDrinks === 'coldDrinks'? 
    'Cold' : this.props.sortedDrinks === 'hotDrinks'? 
    'Hot' : this.props.sortedDrinks === 'otherDrinks'? 
    'Other' : 'All';
    axios.get('http://localhost:3001/get'+filter+'Drinks').then((res)=>{
      console.log(res.data)
      let mapped = res.data.map((key)=>{
        return (
          <container className='drinks_container'>
            <div 
              className='drinks' 
              id={key.table_name + '_' + key.id}>
            </div>
            <div className='info_drinks_container'>
              <div>{key.name}</div>
              <div>${key.price}</div>
              <div>{key.type===1? 'Fountain ' : key.type===2? 'Hot ' : 'Cold '}Drink</div>
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
    sortedDrinks: state.sortedDrinks,
  }
}
export default connect(mapStateToProps)(Drinks)