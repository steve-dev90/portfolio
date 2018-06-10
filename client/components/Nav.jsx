import React from 'react'
import {connect} from 'react-redux'
import { showAbout, showProjects, showContact } from '../actions/portfolio'
import { Link, Element } from 'react-scroll'
import SocialIcons from './SocialIcons'

class Nav extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      burgerMenu : false
    }
    this.burgerToggle = this.burgerToggle.bind(this)
  }
    
  burgerToggle () {
    this.setState ({
      burgerMenu : !this.state.burgerMenu
    })

  }

  render() { 
    return (
      <React.Fragment>
        <div className="navbar-brand">

          <SocialIcons iconClass={"is-hidden-tablet is-hidden-desktop"} />

          <button className="navbar-burger" onClick={() => this.burgerToggle()} >
            <span className="has-text-link"></span>
            <span className="has-text-link"></span>
            <span className="has-text-link"></span>
          </button>

        </div>


        <div className={this.state.burgerMenu ? "navbar-menu is-active": "navbar-menu" }> 

          
          <div className="navbar-end">
            <SocialIcons iconClass={"is-hidden-mobile"} />

            <div className="navbar-item has-dropdown is-hoverable">  
              <div className="navbar-item is-hidden-mobile">
                <span className="icon title is-4">
                  <i className="fa fa-chevron-down has-text-link"></i>
                </span>
              </div>
              <div className="navbar-dropdown is-boxed">
                <Link activeClass="active" className="About" to="About" spy={true} smooth={true} duration={600} >
                  <button className="button is-white navbar-item is-size-6 is-size-4-mobile is-inline-mobile" onClick={() => this.props.dispatch(showAbout())}>
                    About 
                  </button> 
                </Link> 
                <Link activeClass="active" className="Projects" to="Projects" spy={true} smooth={true} duration={600} >
                  <button className="button is-white navbar-item is-size-6 is-size-4-mobile is-inline-mobile" onClick={() => this.props.dispatch(showProjects())}>
                    Projects
                  </button> 
                </Link> 
                <Link activeClass="active" className="Contact" to="Contact" spy={true} smooth={true} duration={600} >
                  <button className="button is-white navbar-item is-size-6 is-size-4-mobile is-inline-mobile" onClick={() => this.props.dispatch(showContact())}>
                    Contact
                  </button> 
                </Link> 
              </div>

            </div>
          </div>

        </div>

      </React.Fragment> 
  )} 
}

export default connect()(Nav)