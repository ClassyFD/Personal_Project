import { createStore } from 'redux'
import reducer from './ReduxReducer.js'
let store = createStore(reducer)
export default store;