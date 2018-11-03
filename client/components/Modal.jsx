import React from 'react'
import {connect} from 'react-redux'
import { showAbout, showProjects, showContact, handleCloseModal } from '../actions/portfolio'
import { Link } from 'react-scroll'
import ReactModal from 'react-modal'

class Modal extends React.Component {

  render() { 
    return (      
      <React.Fragment>
          
        <ReactModal 
          isOpen={this.props.portfolio.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
          >
            <button className ="is-pulled-right" onClick={() => this.props.dispatch(handleCloseModal())}>Close Modal</button>
            <Link activeClass="active" className="About" to="About" offset={-50} spy={true} smooth={true} duration={600} >
              <button className="button is-white is-large is-fullwidth" onClick={() => this.props.dispatch(showAbout())}>
                About 
              </button> 
            </Link> 
            <Link activeClass="active" className="Projects" to="Projects" offset={-50} spy={true} smooth={true} duration={600} >
              <button className="button is-white is-large is-fullwidth" onClick={() => this.props.dispatch(showProjects())}>
                Projects
              </button> 
            </Link> 
            <Link activeClass="active" className="Contact" to="Contact"  offset={-50} spy={true} smooth={true} duration={600} >
              <button className="button is-white is-large is-fullwidth" onClick={() => this.props.dispatch(showContact())}>
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