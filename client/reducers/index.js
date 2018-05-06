import {combineReducers} from 'redux'

import greetings from './greetings' 
import portfolio from './portfolio'

export default combineReducers({
  greetings,
  portfolio
})
