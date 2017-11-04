import { FETCH_AUTH_USER } from '../actions/actionTypes'

// Default auth state is null; don't know if the user is currently
// authenticated or not. If a payload exist containing data from the server
// update state with the user object, or, return false (aka. user isnt auth'd)

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_AUTH_USER:
      return action.payload || false
    default:
      return state
  }
}
