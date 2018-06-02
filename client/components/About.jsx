import React from 'react'
import {connect} from 'react-redux'
import { showAbout, hideAbout } from '../actions/portfolio'
import { Link, Element } from 'react-scroll'

class About extends React.Component {

  render(props) {

    return (
      <React.Fragment>  
        <div className="columns">


          <div className="column is-11">
          
            <Element name="About" className="element content-title" >
              <h2 className="title is-2">About</h2>
            </Element>
            
            {this.props.portfolio.aboutDisplay &&              
            <div className="content is-size-4">
              <p>My name is Steve Torrens. I have decided to get back to building things and are now looking for a 
              start to my career as a software developer. I have recently completed a 
              boot camp at the <a href="https://devacademy.co.nz">Enspiral Dev Academy</a> and have experience
              in developing small applications in JavaScript and associated web technologies. 
              You can see examples of my Code on <a href="https://github.com/steve-dev90">github</a>.</p>

              {/* <p>I am not your typically new starter, and have a lot to offer beside my
                  technical skills. I like working with people and I can contribute to 
                  building a strong team centred around collaboration and great working 
                  relationships.</p>  

                <p>At NZX I was business owner of five complex, bespoke IT systems used
                  for the financial management of the wholesale electricity market. This involved
                  development of product roadmaps, scoping costs and resources for system changes, 
                  project management of small system changes and provision of business insight and 
                  expertise.</p> */}

              <p>I am now looking for work, If you need to know more get in touch with me.</p>       
            </div>}        
          </div>
          
          <div className="column is-1">
            
            {this.props.portfolio.aboutDisplay 
            ?             
            <button className="button is-white content-title" onClick={() => this.props.dispatch(hideAbout())}>
              <span className="icon ">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
              </span>
            </button> 
            :
            <button className="button is-white content-title" onClick={() => this.props.dispatch(showAbout())}>
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
  console.log(state.portfolio)  
  return {portfolio: state.portfolio}
}

export default connect(mapStateToProps)(About) 