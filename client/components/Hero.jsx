import React from 'react'

const Hero = () => (
  <React.Fragment>
    <div className="columns is-gapless">

      <div className="column is-three-fifths">
        <div className="hero is-fullheight">
          <div className="hero-body hero-image">
          </div>
        </div>
      </div>

      <div className="column is-two-fifths">
        <div className="hero is-fullheight is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">
                Full Stack Software Developer
              </h1>
              <h2 className="subtitle">
                Communication. Quality. Delivery.
              </h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  </React.Fragment>
  )

  export default Hero