//make constants here.
const MOUNT_COMPONENT = 'MOUNT_COMPONENT'
// declare what your initial state should be
let initialState = {
  mountedComponent: null,
}

//export your actions
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case MOUNT_COMPONENT:
      return Object.assign({}, state, state.mountedComponent = action.value)
    default:
      return Object.assign({}, state)
  }
}