import React from 'react'
import {connect} from 'react-redux'
import { handleOpenModal } from '../actions/portfolio'
// import { Link } from 'react-scroll'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import SocialIcons from './SocialIcons'

import Modal from './Modal'

// Id burgerToggle required?

class Nav extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      burgerMenu : false,
    }
    this.burgerToggle = this.burgerToggle.bind(this)
  }

  burgerToggle () {
    this.setState ({ burgerMenu : !this.state.burgerMenu })
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar is-transparent is-size-4 is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <span className="spaceship">
                <img src="/images/alien-spaceship.png" alt="alien spaceship image"></img>
              </span>
              <h1 className="navbar-item is-uppercase logo">Steve Torrens</h1>
            </div>

            <div className="navbar-item is-hidden-desktop burger-container">
              <button  className="burger" onClick={() => this.props.dispatch(handleOpenModal())} >
                <span className="icon title is-4">
                  <i className="fa fa-bars has-text-link"></i>
                </span>
              </button>
            </div>

            {/* <Modal /> */}

            <div className={this.state.burgerMenu ? "navbar-menu is-active": "navbar-menu" }>
              <div className="navbar-end">
                <Link className="navbar-item is-uppercase is-hidden-touch is-size-7" to="./">Home</ Link>
                <Link className="navbar-item is-uppercase is-hidden-touch is-size-7" to="./projects">Projects</ Link>
                <Link className="navbar-item is-uppercase is-hidden-touch is-size-7" to="./about">About</ Link>
                <Link className="navbar-item is-uppercase is-hidden-touch is-size-7" to="./contact">Contact</ Link>
              </div>
            </div>

          </div>
        </nav>
      </React.Fragment>
  )}
}

export default connect()(Nav)