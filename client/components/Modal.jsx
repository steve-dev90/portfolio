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

          <Link  replace to="./"><button  className="modal-item" onClick={() => this.props.dispatch(handleCloseModal())}>
            Home
          </button></ Link>
          <button onClick={() => this.props.dispatch(handleCloseModal())}>
            <Link className="modal-item" replace to="./projects">Projects</ Link>
          </button>
          <button onClick={() => this.props.dispatch(handleCloseModal())}>
            <Link className="modal-item" replace to="./about">About</ Link>
          </button>
          <button onClick={() => this.props.dispatch(handleCloseModal())}>
            <Link className="modal-item" replace to="./contact">Contact</ Link>
          </button>
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