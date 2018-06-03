import React from 'react'
import {connect} from 'react-redux'
import { showProjects, hideProjects } from '../actions/portfolio';
import { Link, Element } from 'react-scroll'
import Project from './Project' 

import {getProjects} from '../actions/projects'

class Projects extends React.Component {

  componentDidMount() {
    this.props.dispatch(getProjects()) 
  }

  render(props) {

    return (
      <React.Fragment>  
        <div className="columns is-multiline">

          <div className="column is-11">
            <Element name="Projects" className="element content-title" >
              <h2 className="title is-2">Projects</h2>
            </Element>
       
          </div>

          <div className="column is-1">
            
            {this.props.portfolio.projectsDisplay 
            ?             
            <button className="button is-white content-title" onClick={() => this.props.dispatch(hideProjects())}>
              <span className="icon ">
              <i className="fa fa-chevron-up" aria-hidden="true">
              </i>
              </span>
            </button> 
            :
            <button className="button is-white content-title" onClick={() => this.props.dispatch(showProjects())}>
              <span className="icon ">
              <i className="fa fa-chevron-down" aria-hidden="true"></i> 
              </span>
            </button>}           
     
          </div>

          {this.props.portfolio.projectsDisplay && 
            this.props.projects.map(project => <Project project={project}/>)} 
      
        </div>
      </React.Fragment>   
    
    )
  }
}

const mapStateToProps = (state) => {
  console.log('Projects',state)  
  return {
    portfolio: state.portfolio,
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects) 