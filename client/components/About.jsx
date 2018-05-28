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
            <Element name="About" className="element" >
              <h2 className="title is-2">About</h2>
            </Element>
            
            {this.props.portfolio.aboutDisplay &&              
            <p> Bla Bla Blad </p>}        
          </div>
          
          <div className="column is-1">
            
            {this.props.portfolio.aboutDisplay 
            ?             
            <button className="button is-white" onClick={() => this.props.dispatch(hideAbout())}>
              <span className="icon ">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
              </span>
            </button> 
            :
            <button className="button is-white" onClick={() => this.props.dispatch(showAbout())}>
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