import {
  FETCH_USERS,
  FETCH_ADMINS,
  FETCH_AUTH_USER,
  LOADING,
} from './actionTypes'

export const fetchUsers = () => async (dispatch, getState, api) => {
  dispatch({ type: LOADING })
  const { data } = await api.get('/users')
  return dispatch({ type: FETCH_USERS, payload: data })
}

export const fetchAdmins = () => async (dispatch, getState, api) => {
  dispatch({ type: LOADING })
  const { data } = await api.get('/admins')
  return dispatch({ type: FETCH_ADMINS, payload: data })
}

export const fetchAuthUser = () => async (dispatch, getState, api) => {
  const { data } = await api.get('/auth/current_user')
  return dispatch({ type: FETCH_AUTH_USER, payload: data })
}
