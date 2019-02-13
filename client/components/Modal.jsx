import React from 'react'
import {connect} from 'react-redux'
import { showAbout, showProjects, showContact, handleCloseModal } from '../actions/portfolio'
import { Link } from 'react-scroll'
import ReactModal from 'react-modal'

class Modal extends React.Component {

  constructor () {
    super()
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleCloseModal () {
    this.props.dispatch(handleCloseModal())
  }

  render() {
    return (
      <React.Fragment>

        <ReactModal
          isOpen={this.props.portfolio.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          className="Modal has-background-info"
          overlayClassName="Overlay"
          >
          <button className="button is-white is-pulled-right has-background-info" onClick={() => this.props.dispatch(handleCloseModal())}>
            <span className="icon has-text-white is-size-6"><i className="fa fa-times"></i></span>
          </button>
          {/* <Link activeClass="active" className="About" to="About" offset={-50} spy={true} smooth={true} duration={600} >
            <button className="modal-item" onClick={() => this.props.dispatch(showAbout())}>
              About
            </button>
          </Link>  */}
          <Link activeClass="active" className="Projects" to="Projects" offset={-50} spy={true} smooth={true} duration={600} >
            <button className="modal-item" onClick={() => this.props.dispatch(showProjects())}>
              Projects
            </button>
          </Link>
          <Link activeClass="active" className="Contact" to="Contact"  offset={-50} spy={true} smooth={true} duration={600} >
            <button className="modal-item" onClick={() => this.props.dispatch(showContact())}>
              Contact
            </button>
          </Link>
        </ReactModal>

      </React.Fragment>
  )}
}

const mapStateToProps = (state) => {
  console.log('Modal',state.portfolio.showModal)
  return {
    portfolio: state.portfolio,
  }
}

export default connect(mapStateToProps)(Modal)