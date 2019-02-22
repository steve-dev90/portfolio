import React from 'react'
import { connect } from 'react-redux'
import { handleCloseModal } from '../actions/portfolio'
import ReactModal from 'react-modal'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Modal extends React.Component {

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

          <Link replace to="./"><button className="modal-item" onClick={() => this.props.dispatch(handleCloseModal())}>
            Home
          </button></ Link>
          <Link replace to="./projects"><button className="modal-item" onClick={() => this.props.dispatch(handleCloseModal())}>
            Projects
          </button></ Link>
          <Link  replace to="./about"><button className="modal-item"onClick={() => this.props.dispatch(handleCloseModal())}>
            About
          </button></ Link>
          <Link  replace to="./contact"><button className="modal-item" onClick={() => this.props.dispatch(handleCloseModal())}>
            Contact
          </button></ Link>
        </ReactModal>

      </React.Fragment>
  )}
}

const mapStateToProps = (state) => {
  return {
    portfolio: state.portfolio,
  }
}

export default connect(mapStateToProps)(Modal)