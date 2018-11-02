import React from 'react'
import {connect} from 'react-redux'
import { showAbout, showProjects, showContact } from '../actions/portfolio'
import { Link } from 'react-scroll'
import SocialIcons from './SocialIcons'
import ReactModal from 'react-modal'

class Modal extends React.Component {

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
              
        <Link activeClass="active" className="About" to="About" offset={-50} spy={true} smooth={true} duration={600} >
          <button className="button is-white navbar-item is-size-6 is-size-4-touch is-inline-touch" onClick={() => this.props.dispatch(showAbout())}>
            About 
          </button> 
        </Link> 

      </React.Fragment> 
  )} 
}

export default connect()(Modal)