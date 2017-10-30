import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from '../client/reducers'

// Server Redux store will behave differently than our Client store.
// We need some way to detect when we finish all our initial data loading
// before we actually attempt to render our application.

export default (initialState = {}) => {
  const middleware = applyMiddleware(reduxThunk)
  const store = createStore(rootReducer, initialState, middleware)

  return store
}
