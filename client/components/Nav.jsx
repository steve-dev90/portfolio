import React from 'react'
import {connect} from 'react-redux'
import { showAbout, showProjects, showContact, handleOpenModal } from '../actions/portfolio'
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
        <div className="navbar-brand">
          <SocialIcons iconClass={"is-hidden-desktop"} />
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
            {/* <Link activeClass="active" className="Projects" to="Projects" offset={-50} spy={true} smooth={true} duration={600} >
              <a className="navbar-item is-uppercase is-hidden-touch is-size-7" onClick={() => this.props.dispatch(showProjects())}>
                Projects
              </a>
            </Link> */}
            <Link className="navbar-item is-uppercase is-hidden-touch is-size-7" onClick={() => this.props.dispatch(showProjects())} to="./projects">Projects</ Link>
            <Link className="navbar-item is-uppercase is-hidden-touch is-size-7" onClick={() => this.props.dispatch(showAbout())} to="./about">About</ Link>
            <Link className="navbar-item is-uppercase is-hidden-touch is-size-7" onClick={() => this.props.dispatch(showContact())} to="./contact">Contact</ Link>
            {/* <Link activeClass="active" className="Contact" to="Contact"  offset={-50} spy={true} smooth={true} duration={600} >
              <a className="navbar-item is-uppercase is-hidden-touch is-size-7" onClick={() => this.props.dispatch(showContact())}>
                Contact
              </a>
            </Link> */}
          </div>
        </div>

      </React.Fragment>
  )}
}

export default connect()(Nav)