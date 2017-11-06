import { FETCH_USERS, FETCH_ADMINS, LOADING } from '../actions/actionTypes'

const initialState = {
  loading: false,
  users: [],
  admins: [],
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
    case FETCH_ADMINS:
      return {
        ...state,
        loading: false,
        admins: action.payload,
      }
    default:
      return state
  }
}
