import { FETCH_USERS, LOADING } from './actionTypes'

export const fetchUsers = () => async (dispatch, getState, api) => {
  dispatch({ type: LOADING })
  const { data } = await api.get('/users')
  return dispatch({ type: FETCH_USERS, payload: data })
}
