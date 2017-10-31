import { FETCH_USERS, LOADING } from '../actions/actionTypes'

const initialState = {
  loading: false,
  users: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    default:
      return state
  }
}
