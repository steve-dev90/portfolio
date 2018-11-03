import React from 'react'
import {connect} from 'react-redux'
import { showAbout, showProjects, showContact, handleCloseModal } from '../actions/portfolio'
import { Link } from 'react-scroll'
import ReactModal from 'react-modal'

class Modal extends React.Component {

  render() { 
    return (
      
      <React.Fragment>
          {console.log(this.props.portfolio.showModal)}
          <ReactModal 
            isOpen={this.props.portfolio.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
          >

            <button onClick={() => this.props.dispatch(handleCloseModal())}>Close Modal</button>
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