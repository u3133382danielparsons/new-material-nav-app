import {combineReducers} from 'redux'
import UserReducer from './ReducerUsers'
import ActiveUserReducer from './ReducerActiveUser'

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
})

export default allReducers
