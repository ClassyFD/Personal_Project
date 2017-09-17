//make constants here.
const MOUNT_COMPONENT = 'MOUNT_COMPONENT',
      MOUNT_NAV = 'MOUNT_NAV',
      SORT_DRINKS = 'SORT_DRINKS',
      SORT_SAUCES = 'SORT_SAUCES',
      SORT_BREAD = 'SORT_BREAD',
      ADD_TO_CART = 'ADD_TO_CART',
      DELETE_ITEM = 'DELETE_ITEM';

// declare what your initial state should be
let initialState = {
  mountedComponent: null,
  mountedNav: null,
  sortedDrinks:null,
  sortedSauces:null,
  sortedBread:null,
  cart: [],
}

//export your actions
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case MOUNT_COMPONENT:
    return Object.assign({}, state, state.mountedComponent = action.value);
    case MOUNT_NAV:
    return Object.assign({}, state, state.mountedNav = action.value);
    case SORT_DRINKS:
      return Object.assign({}, state, state.sortedDrinks = action.value);
    case SORT_SAUCES:
      return Object.assign({}, state, state.sortedSauces = action.value);
    case SORT_BREAD:
      return Object.assign({}, state, state.sortedBread = action.value);
    case ADD_TO_CART:
      let newArr = [action.cartObj];  
      let newState = state.cart.concat(newArr)
      return Object.assign({}, state, state.cart = newState);
    case DELETE_ITEM:
      let count = 0;
      let nextState = state.cart.filter((e)=>{
        if (count === 0 && e.name === action.item) {
          count++;
        } else if (count > 0 || e.name !==action.item) {
          return e;
        }
      })
      return Object.assign({}, state, state.cart = nextState);
    default:
      return Object.assign({}, state)
  }
}