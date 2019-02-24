import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { Element } from 'react-scroll'

const LandingContent = () => (
  <React.Fragment>
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <Element name="Who" className="element content-title" ></Element>
            <h2 className="title is-3 has-text-centered has-text-weight-semibold has-text-info">What I do</h2>
            <p className="content is-size-4-mobile" >
              I am a passionate software developer that enjoys developing web applications
              using Ruby on Rails and Javascript. I have excellent communication skills and
              are able to effectively collaborate within and between teams. I take pride in
              my work, and strive to write code that is maintainable, well tested and that
              delivers on intended outcomes.
            </p>
            <div className="content is-link has-text-centered is-size-4-mobile">
              <Link to="./about">Learn More</ Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
)

export default LandingContent