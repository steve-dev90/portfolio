import React from 'react'
import {connect} from 'react-redux'
import { showContact, hideContact } from '../actions/portfolio'
import { Link, Element } from 'react-scroll'

class Contact extends React.Component {

  render(props) {

    return (
      <React.Fragment>  
        <div className="columns">


          <div className="column is-11">
          
            <Element name="Contact" className="element content-title" >
              <h2 className="title is-2">Contact</h2>
            </Element>
            
            {this.props.portfolio.contactDisplay &&              
            <div className="content is-size-4">
              <p>CONTACT</p>       
            </div>}        
          </div>
          
          <div className="column is-1">
            
            {this.props.portfolio.contactDisplay 
            ?             
            <button className="button is-white content-title" onClick={() => this.props.dispatch(hideContact())}>
              <span className="icon ">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
              </span>
            </button> 
            :
            <button className="button is-white content-title" onClick={() => this.props.dispatch(showContact())}>
              <span className="icon ">
              <i className="fa fa-chevron-down" aria-hidden="true"></i> 
              </span>
            </button>}           
     
          </div>    
        </div>
      </React.Fragment>   
    
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)  
  return {portfolio: state.portfolio}
}

export default connect(mapStateToProps)(Contact) 