import React from 'react'
import {connect} from 'react-redux'
import { showAbout, hideAbout } from '../actions/portfolio'
import { Link, Element } from 'react-scroll'

class About extends React.Component {

  render(props) {
    return (
      <React.Fragment>
        <div className="columns is-centered is-multiline is-mobile">

          <div className="column is-10-mobile is-7-tablet is-7-desktop">
            <Element name="About" className="element content-title" >
              {/* <h2 className="title is-2 ">About Me</h2> */}
            </Element>
            <h2 className="title is-2 ">About Me</h2>
          </div>

          <div className="column is-1">

            {this.props.portfolio.aboutDisplay
            ?
            <button className="button is-white content-title is-pulled-right" onClick={() => this.props.dispatch(hideAbout())}>
              <span className="icon title is-4">
                <i className="fa fa-chevron-up"></i>
              </span>
            </button>
            :
            <button className="button is-white content-title is-pulled-right" onClick={() => this.props.dispatch(showAbout())}>
              <span className="icon title is-4">
                <i className="fa fa-chevron-down"></i>
              </span>
            </button>}

          </div>

          {this.props.portfolio.aboutDisplay &&
            <div className="column is-11-mobile is-8-tablet is-8-desktop">
              <div className="content is-size-6 has-text-justified">
                <p>My name is Steve Torrens. I am a software developer with a background in mechanical engineering,
                operations and policy. I am currently contracting for a small start-up called Glimp, working
                with Ruby on Rails. Earlier this year I completed a boot camp at the <a href="https://devacademy.co.nz">Enspiral Dev Academy</a> and
                have experience in developing small applications in JavaScript and associated web technologies.
                You can see examples of my Code on <a href="https://github.com/steve-dev90">github</a>.</p>

                <p>I am now available for work. If you need to know more get in touch with me.</p>
              </div>
            </div>}

        </div>
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  return {portfolio: state.portfolio}
}

export default connect(mapStateToProps)(About)
