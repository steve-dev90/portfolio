import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Project from './Projects'
import About from './About'
import Contact from './Contact'

import Portfolio from './Portfolio';

const App = () => (
  <Router>
    <div >
      <Route exact path='/' component={Portfolio}/>
      <Route exact path='/projects' component={Project} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </div>
  </Router>
)

export default App
