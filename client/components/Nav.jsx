import React from 'react'
import {connect} from 'react-redux'
import { showAbout, showProjects } from '../actions/portfolio'
import { Link, Element } from 'react-scroll'

const Nav = (props) => (
  <React.Fragment>
    <div className="navbar-menu">

      <div className="navbar-end">
        <div className="navbar-item">
          <a href="https://github.com/steve-dev90"><span className="icon">
            <i className="fa fa-github"></i>
          </span></a>  
        </div>
        <div className="navbar-item">
          <a href="https://www.linkedin.com/in/steve-torrens-6100b721/"><span className="icon">
            <i className="fa fa-linkedin"></i>
          </span></a>  
        </div>        
        <div className="navbar-item has-dropdown is-hoverable">
          <div className ="navbar-link">
            Menu
          </div>
          <div className="navbar-dropdown is-boxed">
            <Link activeClass="active" className="About" to="About" spy={true} smooth={true} duration={800} >
              <button className="button is-white navbar-item is-size-5" onClick={() => props.dispatch(showAbout())}>
                About 
              </button> 
            </Link> 
            <Link activeClass="active" className="Projects" to="Projects" spy={true} smooth={true} duration={800} >
              <button className="button is-white navbar-item is-size-5" onClick={() => props.dispatch(showProjects())}>
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