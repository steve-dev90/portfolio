import React from 'react'
import {connect} from 'react-redux'
import Project from './Project'
import {getProjects} from '../actions/projects'

class Projects extends React.Component {

  componentDidMount() {
    this.props.dispatch(getProjects())
    window.scrollTo(0, 0)
  }

  render(props) {

    return (
      <React.Fragment>
        <section className="Projects section">
          <div className="container">
            <div className="columns is-centered is-multiline is-mobile">
              <div className="column is-11-mobile is-8-tablet is-8-desktop">
                <h2 className="title is-3 has-text-centered has-text-weight-semibold has-text-info">Projects</h2>
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