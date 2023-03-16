import {createStore,applyMiddleware, combineReducers} from 'redux'
import { TodoReducer } from './Reducers/TodoReducer'
import thunk from 'redux-thunk'
const rootReducer=combineReducers({
TodoReducer
})
export const  store=createStore(rootReducer,applyMiddleware(thunk))