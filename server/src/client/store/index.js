import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers'
import { createAxiosInstance } from '../../helpers'

const axiosInstance = createAxiosInstance('/api')

// Pass the created Axios instance to reduxThunk to have access
// to the instance in all of our action creators.
const middleware = applyMiddleware(reduxThunk.withExtraArgument(axiosInstance))

// Client-side Redux store.
export default (initialState = {}) =>
  createStore(rootReducer, initialState, middleware)
