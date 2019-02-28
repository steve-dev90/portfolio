import React from 'react'
import { Link } from 'react-scroll'
import ImageLoader from 'react-load-image';

class Hero extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="columns is-gapless">

        <div className="column is-two-fifths is-hidden-mobile">
          <div className="has-background-light">
            <ImageLoader src="/images/sketch3.jpg"  >
              <img className="heroimg" />
              <div>Error!</div>
              <img src="/images/sketch3-small.jpg" style={{filter: 'blur(20px)'}} className="heroimg"/>
            </ImageLoader>
          </div>

          {/* <div className="hero is-fullheight">
            <div className="hero-body hero-image ">
            </div>
          </div> */}
        </div>

        <div className="column is-three-fifths">
          <div className="hero is-fullheight is-light">
            <div className="hero-body ">
              <div className="container">
                <h2 className="is-size-1 has-text-weight-bold has-text-info">
                  Steve Torrens
                </h2>
                <h1 className="is-size-3 has-text-weight-semibold has-text-info">
                  Full Stack Software Developer
                </h1>
                <div className="has-text-centered hero-arrow has-text-link">
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