import React from 'react'
import Hero from './Hero'
import LandingContent from './LandingContent'
import MDSpinner from "react-md-spinner"

class Portfolio extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  portfolio() {
    return (
      <React.Fragment>
        <Hero/>
        <LandingContent />
      </React.Fragment> )
  }

  render() {
    return (
      this.state.isLoading
      ? <div className="spinner"><MDSpinner singleColor="#03a9f4" /></div>
      : this.portfolio()
    )
  }
}

export default Portfolio