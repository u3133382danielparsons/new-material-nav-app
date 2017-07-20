import {combineReducers} from 'redux'
import NamesReducer from './NamesReducer'
import ActiveNameReducer from './ActiveNameReducer'

const allReducers = combineReducers({
  names: NamesReducer,
  activeName: ActiveNameReducer
})
export default allReducers
