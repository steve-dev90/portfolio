import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import LandingContent from './LandingContent'
import Footer from './Footer'

class Portfolio extends React.Component {

  constructor (props) {
    super(props)
    // this.state = {
    //   hero : true,
    // }
    // this.onScroll = this.onScroll.bind(this);
  }

  // componentDidMount() {
  //   document.addEventListener('scroll', () => {
  //     const hero = window.scrollY < 10;
  //     if (hero !== this.state.hero) {
  //       this.onScroll(hero)
  //     }
  //   });
  // }

  // onScroll(hero) {
  //   this.setState({ hero })
  //   console.log(`you scrolled! ${hero}`)
  // }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Hero/>
        <LandingContent />
        {/* {this.state.hero ? comp1 : comp2} */}
        <footer className="footer pagefooter">
          <div className="container">
            <Footer />
          </div>
        </footer>
      </React.Fragment> )
  }
}

export default Portfolio