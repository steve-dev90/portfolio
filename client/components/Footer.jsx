import React from 'react'
import SocialIcons from './SocialIcons'

const Header = () => (
  <React.Fragment>
    <footer className="footer pagefooter">
      <div className="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-one-quarter has-text-centered">
            <SocialIcons />
          </div>
        </div>
        <div class="columns is-mobile is-centered">
          <div class="column is-one-quarter has-text-right">
            <div className="spaceship">
              <img src="/images/alien-spaceship.png" alt="alien spaceship image"></img>
            </div>
          </div>
          <div class="column is-one-fifth">
          </div>
          <div class="column is-one-quarter">
            <p className="has-text-info is-size-7 has-text-weight-light">Contact</p>
            <p className="has-text-info is-size-7 has-text-weight-light">Email: contactstorrens@gmail.com</p>
          </div>
        </div>
        <div class="columns is-mobile is-centered">
          <div class="column is-one-quarter has-text-centered">
            <span className="icon is-small is-left">
              <i className="fa fa-copyright"></i>
            </span>
            <p className="is-size-7">
              2018 Steve Torrens
            </p>
          </div>
        </div>
      </div>
    </footer>
  </React.Fragment>
)

export default Header