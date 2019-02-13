import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Hero from './Hero'
import Contact from './Contact'
import Footer from './Footer'

const Portfolio = () => (
  <React.Fragment>
    <Nav />
    <section className="hero is-info">
      <Header />
    </section>
    <section className="hero is-light">
      <Hero />
    </section>
    <section className="Contact sub-title">
      <div className="container">
        <Contact />
      </div>
    </section>
    <footer className="footer pagefooter">
      <div className="container">
        <Footer />
      </div>
    </footer>
  </React.Fragment>
)

export default Portfolio