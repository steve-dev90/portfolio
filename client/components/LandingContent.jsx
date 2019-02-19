import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { Element } from 'react-scroll'

const LandingContent = () => (
  <React.Fragment>
    <section className="section">
      <div className="container">
        <div className="columns is-centered is-mobile">
          <div className="column is-11-mobile is-8-tablet is-8-desktop">
            <Element name="Who" className="element content-title" ></Element>
            <h2 className="title is-3 has-text-centered has-text-weight-semibold has-text-info">What I do</h2>
            <p className="content" > I am a passionate software developer that enjoys developing web
              applications using Ruby on Rails and Javascript.  I have great communication skills,
              and are able to effectively collarborate within
              and between teams. I take pride in my work, and strive to write code that is maintainable,
              well tested and that delivers on intended outcomes.
            </p>
            <div className="content is-link has-text-centered">
              <Link to="./about">Learn More</ Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
)

export default LandingContent