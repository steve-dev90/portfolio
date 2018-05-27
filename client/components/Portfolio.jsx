import React from 'react'
// import {connect} from 'react-redux'
import About from './About'
import Projects from './Projects'
import Nav from './Nav'
import { Link, Element } from 'react-scroll'

const Portfolio = () => (
  <React.Fragment>
    <nav className="navbar is-transparent">
      <div className="container">
        <Nav />
      </div>
    </nav>  
    <section className="section">  
      {/* <Header /> */}
      <h1 className="title is-1" >Steve Torrens</h1>
      <img src="/images/sketch.jpg"/>
      <Element name="test1" className="element" >
      test 12
      </Element>
    </section>  
    <section className="About">
      <div className="container">
        <About />
      </div>
    </section>
    <section className="Projects">
      <div className="container">
        <Projects />
      </div>
    </section>
  </React.Fragment>
)

// const mapStateToProps = (state) => {
//   return {greetings: state.greetings}
// }

// export default connect(mapStateToProps)(Greetings)
export default Portfolio 