import React from 'react'
import {connect} from 'react-redux'
import { showAbout, hideAbout } from '../actions/portfolio'
import { Link, Element } from 'react-scroll'

const Nav = (props) => (
  <React.Fragment>
    <div className="navbar-menu">

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          Menu
          <div className="navbar-dropdown is-boxed">
            <button className="button is-white" onClick={() => props.dispatch(showAbout())}>
               <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={5000} >About </Link>
            </button>  
          </div>

        </div>
      </div>

    </div>

  </React.Fragment>  
)

export default connect()(Nav)