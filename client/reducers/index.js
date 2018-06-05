import {combineReducers} from 'redux'

import projects from './projects' 
import portfolio from './portfolio'
import forms from './forms'

export default combineReducers({
  projects,
  portfolio,
  ...forms
})
