import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const LandingContent = () => (
  <React.Fragment>
    <section className="section">
      <div className="container">
        <div className="columns is-centered is-mobile">
          <div className="column is-11-mobile is-8-tablet is-8-desktop">
            <h2 className="title is-2 has-text-centered has-text-weight-semibold">What I do</h2>
            <p className="content" > I am a passionate software developer that enjoys developing web
              applications using Ruby on Rails and Javascript.  I have great communication skills,
              and are able to build solid working relationsips and effectively collarborate within
              and between teams. I take pride in my work, and strive to write code that is maintainable,
              well tested and that delivers on intended outcomes.
            </p>
            <div className="content is-info has-text-centered">
              <Link to="./about">Learn More</ Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
)

export default LandingContent