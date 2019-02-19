import {HashRouter as Router, Route, Link} from 'react-router-dom'
import React from 'react'
import SocialIcons from './SocialIcons'

const Footer = () => (
  <React.Fragment>
    <footer className="footer pagefooter">
      <div className="container">
        <div className="columns is-mobile is-centered ">
          <div className="column is-one-quarter has-text-centered">
            <SocialIcons />
          </div>
        </div>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third has-text-centered">
            <p className="is-size-7 has-text-weight-light">
              <span>contactstorrens@gmail.com or </span>
              <span className="has-text-link"><Link to="./contact" replace>send a message</ Link></span>
            </p>
          </div>
        </div>
        <div className="spaceship">
          <img src="/images/alien-spaceship.png" alt="alien spaceship image"></img>
        </div>
        <div className="columns is-mobile">
          <div className="column is-one-third">
            <p className="is-size-7">
              <span className="icon">
                <i className="fa fa-copyright icon-size"></i>
              </span>
              2019 Steve Torrens
            </p>
          </div>
        </div>
      </div>
    </footer>
  </React.Fragment>
)

export default Footer