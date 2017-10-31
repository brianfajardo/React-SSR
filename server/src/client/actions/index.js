import axios from 'axios'
import { FETCH_USERS, LOADING } from './actionTypes'
import keys from '../../../config'

export const fetchUsers = () => async dispatch => {
  dispatch({ type: LOADING })
  const { data } = await axios.get(`${keys.BASE_API_URL}/users`)
  return dispatch({ type: FETCH_USERS, payload: data })
}
