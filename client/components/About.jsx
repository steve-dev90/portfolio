import React from 'react'
import Technologies from './Technologies'

class About extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(props) {
    return (
      <React.Fragment>
        <section className="About section">
          <div className="container">
            <div className="columns is-centered is-multiline is-mobile">
              <div className="column is-11-mobile is-8-tablet is-8-desktop">
                <h2 className="title is-3 has-text-centered has-text-weight-semibold has-text-info">Who I am</h2>
                <div className="content is-size-6 has-text-justified">
                  <p>My name is Steve Torrens. I am a software developer, based in Wellington, New Zealand. I have a background in mechanical engineering,
                    operations and policy. I have just finished contracting for a small start-up called Glimp, working
                    with Ruby on Rails. At the beginning of last year I completed a boot camp at the <a href="https://devacademy.co.nz">Enspiral Dev Academy</a> and
                    have experience in developing small applications in JavaScript and associated web technologies.
                    You can see examples of my Code on <a href="https://github.com/steve-dev90">github</a>.</p>

                  <p>I am now available for work. If you need to know more get in touch with me.</p>
                </div>
                <h2 className="title is-3 has-text-centered has-text-weight-semibold has-text-info">Technologies I use</h2>
                <Technologies />
                <h2 className="title is-3 has-text-centered has-text-weight-semibold has-text-info">My Resume</h2>
                <div className="content is-size-6 has-text-justified">
                  <p>If you would like to know a bit more about my background, check out
                    my <a href="./images/resume.pdf" download> resume </a> or, if you prefer,
                    my <a href="https://www.linkedin.com/in/steve-torrens-6100b721/">linkedin</a> profile.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default About
