import React from 'react'
import About from './About'
import Projects from './Projects'
import Nav from './Nav'
import Header from './Header'
import Hero from './Hero'
import Contact from './Contact'
import Footer from './Footer'

const Portfolio = () => (
  <React.Fragment>
    <nav className="navbar is-transparent is-size-4 is-fixed-top">
      <div className="container">
        <Nav />
      </div>
    </nav>
    <section className="hero is-info">
      <Header />
    </section>
    <section className="hero is-light">
      <Hero />
    </section>
    {/* <section className="About sub-title">
      <div className="container">
        <About />
      </div>
    </section> */}
    <section className="Projects sub-title">
      <div className="container">
        <Projects />
      </div>
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