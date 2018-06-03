import {combineReducers} from 'redux'

import projects from './projects' 
import portfolio from './portfolio'

export default combineReducers({
  projects,
  portfolio
})
