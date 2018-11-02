import React from 'react'
import {connect} from 'react-redux'
import { showAbout, showProjects, showContact } from '../actions/portfolio'
import { Link } from 'react-scroll'
import SocialIcons from './SocialIcons'
import ReactModal from 'react-modal'
import Modal from './Modal'

class Nav extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      burgerMenu : false,
      showModal : false
    }
    this.burgerToggle = this.burgerToggle.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
    
  burgerToggle () {
    this.setState ({ burgerMenu : !this.state.burgerMenu })
  }

  handleOpenModal () {
    this.setState ({ showModal: true })
  }
  
  handleCloseModal () {
    this.setState({ showModal: false })
  }

  render() { 
    return (
      <React.Fragment>
        <div className="navbar-brand">
          <SocialIcons iconClass={"is-hidden-desktop"} />
        </div> 

        <div className="navbar-item is-hidden-desktop burger-container">
          <button  className="burger" onClick={this.handleOpenModal} >
            <span className="icon title is-4">
              <i className="fa fa-bars has-text-link"></i>
            </span>
          </button>
          <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
          >
            <Modal /> 
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>

        <div className={this.state.burgerMenu ? "navbar-menu is-active": "navbar-menu" }> 
         
          <div className="navbar-end">
            <SocialIcons iconClass={"is-hidden-touch"} />

            <div className="navbar-item has-dropdown is-hoverable">  
              <div className="navbar-item is-hidden-touch">
                <span className="icon title is-4">
                  <i className="fa fa-chevron-down has-text-link"></i>
                </span>
              </div>
              <div className="navbar-dropdown is-boxed">
                <Link activeClass="active" className="About" to="About" offset={-50} spy={true} smooth={true} duration={600} >
                  <button className="button is-white navbar-item is-size-6 is-size-4-touch is-inline-touch" onClick={() => this.props.dispatch(showAbout())}>
                    About 
                  </button> 
                </Link> 
                <Link activeClass="active" className="Projects" to="Projects" offset={-50} spy={true} smooth={true} duration={600} >
                  <button className="button is-white navbar-item is-size-6 is-size-4-touch is-inline-touch" onClick={() => this.props.dispatch(showProjects())}>
                    Projects
                  </button> 
                </Link> 
                <Link activeClass="active" className="Contact" to="Contact"  offset={-50} spy={true} smooth={true} duration={600} >
                  <button className="button is-white navbar-item is-size-6 is-size-4-touch is-inline-touch" onClick={() => this.props.dispatch(showContact())}>
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