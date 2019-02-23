import React from 'react'
import { Link } from 'react-scroll'

class Hero extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="columns is-gapless">

        <div className="column is-three-fifths is-hidden-mobile">
          <div className="hero is-fullheight">
            <div className="hero-body hero-image ">
            </div>
          </div>
        </div>

        <div className="column is-two-fifths">
          <div className="hero is-fullheight is-light">
            <div className="hero-body hero-image-mobile">
              <div className="container">
                <h2 className="is-size-1 has-text-weight-bold">
                  Steve Torrens
                </h2>
                <h1 className="is-size-3 has-text-weight-semibold">
                  Full Stack Software Developer
                </h1>
                <div className="has-text-centered has-text-link hero-arrow">
                  <Link activeClass="active" className="Who" to="Who" offset={-60} spy={true} smooth={true} duration={600} >
                    <i className="fa fa-angle-double-down"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </React.Fragment>
    )}
}

export default Hero