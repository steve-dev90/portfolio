import React from 'react'
import {connect} from 'react-redux'
import Project from './Project'
import Nav from './Nav'
import {getProjects} from '../actions/projects'

class Projects extends React.Component {

  componentDidMount() {
    this.props.dispatch(getProjects())
  }

  render(props) {

    return (
      <React.Fragment>
        <Nav />
        <section className="Projects sub-title">
          <div className="container">
            <div className="columns is-centered is-multiline is-mobile">
              <div className="column is-11-mobile is-8-tablet is-8-desktop">
                <h2 className="title is-2">Projects</h2>
              </div>
              {this.props.projects
                .filter(project => !project.old_project)
                .map(project => <Project key={project.id} project={project}/>)}
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects)