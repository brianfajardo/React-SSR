import axios from 'axios'
import { FETCH_USERS } from './actionTypes'
import { BASE_API_URL } from '../../../config'

export const fetchUsers = async () => {
  const { data } = await axios.get(`${BASE_API_URL}/`)
  dispatch({ type: FETCH_USERS, payload: data })
}
