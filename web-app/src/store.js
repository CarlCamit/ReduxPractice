import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import userReducer from './reducers/userreducer'
import toDoListReducer from './reducers/todolistreducer'

export default createStore(
    combineReducers({ userReducer, toDoListReducer }), {}, applyMiddleware(logger, thunk)
)