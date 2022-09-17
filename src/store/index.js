import { combineReducers, createStore } from 'redux'
import countReducer from './counterReducer'
import usersReducer from './usersReducer'
import createSagaMiddleware from '@redux-saga/core'
import { applyMiddleware } from '@reduxjs/toolkit'
import { rootWatcher } from '../saga/index'
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  countReducer,
  usersReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
