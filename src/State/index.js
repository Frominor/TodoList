import {createStore,applyMiddleware, combineReducers} from 'redux'
import { TodoReducer } from './Reducers/TodoReducer'
const rootReducer=combineReducers({
TodoReducer
})
export const  store=createStore(rootReducer,applyMiddleware())