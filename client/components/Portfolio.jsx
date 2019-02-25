import React from 'react'
import Hero from './Hero'
import LandingContent from './LandingContent'


class Portfolio extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  render() {
    if (this.state.isloading) return <div>loading</div>
    return (
      <React.Fragment>
        <Hero/>
        <LandingContent />
      </React.Fragment> )
  }
}

export default Portfolio