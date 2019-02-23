import React from 'react'
import {connect} from 'react-redux'
import ContactForm from './ContactForm'
import ContactFormSubmitted from './ContactFormSubmitted'

class Contact extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(props) {

    return (
      <React.Fragment>
        <section className="Contact section">
          <div className="container">
            <div className="columns is-centered is-multiline is-mobile">

              <div className="column is-11-mobile is-8-tablet is-8-desktop">
                  <h2 className="title is-3 has-text-centered has-text-weight-semibold has-text-info">Contact</h2>
              </div>

              <div className="column is-11-mobile is-5-tablet is-5-desktop">
                <div className="content is-size-6">
                  {this.props.portfolio.contactFormDisplay
                  ? <ContactForm />
                  : <ContactFormSubmitted />
                  }
                </div>
              </div>

            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {portfolio: state.portfolio}
}

export default connect(mapStateToProps)(Contact)