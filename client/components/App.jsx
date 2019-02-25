import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Project from './Projects'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Nav from './Nav'
import Footer from './Footer'
import MDSpinner from "react-md-spinner"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  portfolio() {
    return (
      <Router>
        <div >
          <Nav />
          <Route exact path='/' component={Portfolio}/>
          <Route exact path='/projects' component={Project} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Footer />
        </div>
      </Router> )
  }

  render() {
    return (
      this.state.isLoading
      ? <div className="spinner"><MDSpinner singleColor="#03a9f4"/></div>
      : this.portfolio()
    )
  }

}

export default App
