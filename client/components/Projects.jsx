import React from 'react'
import {connect} from 'react-redux'
import { showProjects, hideProjects } from '../actions/portfolio';

class About extends React.Component {

  render(props) {

    return (
      <React.Fragment>  
        <div className="columns">

          <div className="column is-11">
            <h2 className="title is-2">Projects</h2>
            {this.props.portfolio.projectsDisplay &&              
            <p> PROJECTS </p>}        
          </div>

          <div className="column is-1">
            
            {this.props.portfolio.projectsDisplay 
            ?             
            <button className="button is-white" onClick={() => this.props.dispatch(hideProjects())}>
              <span className="icon ">
              <i className="fa fa-chevron-up" aria-hidden="true">
              </i>
              </span>
            </button> 
            :
            <button className="button is-white" onClick={() => this.props.dispatch(showProjects())}>
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