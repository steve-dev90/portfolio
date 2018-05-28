import React from 'react'
import {connect} from 'react-redux'
import { showAbout, showProjects } from '../actions/portfolio'
import { Link, Element } from 'react-scroll'

const Nav = (props) => (
  <React.Fragment>
    <div className="navbar-menu">

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          Menu
          <div className="navbar-dropdown is-boxed">
            <Link activeClass="active" className="About" to="About" spy={true} smooth={true} duration={800} >
              <button className="button is-white navbar-item" onClick={() => props.dispatch(showAbout())}>
                About 
              </button> 
            </Link> 
            <Link activeClass="active" className="Projects" to="Projects" spy={true} smooth={true} duration={800} >
              <button className="button is-white navbar-item" onClick={() => props.dispatch(showProjects())}>
                Projects
              </button> 
            </Link> 
          </div>

        </div>
      </div>

    </div>

  </React.Fragment>  
)

export default connect()(Nav)