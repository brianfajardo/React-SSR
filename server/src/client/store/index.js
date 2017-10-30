import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = applyMiddleware(reduxThunk)

// initialState is an object
const store = initialState => createStore(rootReducer, initialState, middleware)

export default store
