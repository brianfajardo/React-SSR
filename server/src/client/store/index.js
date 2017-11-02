import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import axios from 'axios'
import rootReducer from '../reducers'
import config from '../../../config'

// Client-side Redux store.
export default (initialState = {}) => {

  const axiosInstance = axios.create({
    baseURL: config.PROXY,
  })

  // Pass the created Axios instance to reduxThunk to have
  // access to the instance in all of our action creators.
  const middleware = applyMiddleware(
    reduxThunk.withExtraArgument(axiosInstance)
  )

  return createStore(rootReducer, initialState, middleware)
}
