import React from 'react'

const Hero = () => (
  <React.Fragment>
    <div class="columns is-gapless">

      <div class="column is-three-fifths">
        <div className="hero is-fullheight">
          <div className="hero-body hero-image">
          </div>
        </div>
      </div>

      <div class="column is-two-fifths">
        <div className="hero is-fullheight is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-size-1">
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