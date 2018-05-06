import React from 'react'
// import {connect} from 'react-redux'
import About from './About'

const Portfolio = () => (
  <React.Fragment>
    <section className="section">  
      {/* <Header /> */}
      <h1 className="title is-1">Steve Torrens</h1>
    </section>  
    <section className="About">
      <div className="container">
        <About />
      </div>
    </section>
    <section className="Projects">
      {/* <Projects /> */}
    </section>
  </React.Fragment>
)

// const mapStateToProps = (state) => {
//   return {greetings: state.greetings}
// }

// export default connect(mapStateToProps)(Greetings)
export default Portfolio 