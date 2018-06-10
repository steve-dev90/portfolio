import React from 'react'
import {connect} from 'react-redux'
import { showContact, hideContact } from '../actions/portfolio'
import { Link, Element } from 'react-scroll'
import ContactForm from './ContactForm'
import ContactFormSubmitted from './ContactFormSubmitted'

class Contact extends React.Component {

  render(props) {

    return (
      <React.Fragment>  
        <div className="columns is-centered is-multiline is-mobile">

          <div className="column is-10-mobile is-7-tablet is-7-desktop">
          
            <Element name="Contact" className="element content-title" >
              <h2 className="title is-2">Contact</h2>
            </Element>      
          </div>
          
          <div className="column is-1">
            
            {this.props.portfolio.contactDisplay 
            ?             
            <button className="button is-white content-title is-pulled-right" onClick={() => this.props.dispatch(hideContact())}>
              <span className="icon title is-4">
                <i className="fa fa-chevron-up"></i>
              </span>
            </button> 
            :
            <button className="button is-white content-title is-pulled-right" onClick={() => this.props.dispatch(showContact())}>
              <span className="icon title is-4">
                <i className="fa fa-chevron-down"></i> 
              </span>
            </button>}                
          </div> 

          {this.props.portfolio.contactDisplay && 
          <div className="column is-8-mobile is-5-tablet is-5-desktop">             
            <div className="content is-size-6">
              <p>Interested in working with me? If so, send me a message.</p>
              {this.props.portfolio.contactFormDisplay 
              ? <ContactForm />
              : <ContactFormSubmitted />
              }      
            </div>
          </div>}  

        </div>
      </React.Fragment>   
    
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state)  
  return {portfolio: state.portfolio}
}

export default connect(mapStateToProps)(Contact) 