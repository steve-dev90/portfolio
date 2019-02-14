import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'

const Portfolio = () => (
  <React.Fragment>
    <Nav />
    <section className="hero is-light">
      <Hero />
    </section>
    <footer className="footer pagefooter">
      <div className="container">
        <Footer />
      </div>
    </footer>
  </React.Fragment>
)

export default Portfolio