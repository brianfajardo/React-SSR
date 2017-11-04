import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import axios from 'axios'
import rootReducer from '../client/reducers'
import config from '../../config'

// Server Redux store will behave differently than our Client store.
// We need some way to detect when we finish all our initial data loading
// before we actually attempt to render our application.

export default (req, initialState = {}) => {

  // Server axios instance pointed directly to the API server and
  // attaches the browser request's cookie session.
  const axiosInstance = axios.create({
    baseURL: config.API_URL,
    headers: { cookie: req.get('cookie') || '' },
  })

  const middleware = applyMiddleware(
    reduxThunk.withExtraArgument(axiosInstance)
  )

  return createStore(rootReducer, initialState, middleware)
}
