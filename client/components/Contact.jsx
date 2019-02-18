import React from 'react'
import {connect} from 'react-redux'
import ContactForm from './ContactForm'
import Nav from './Nav'
import ContactFormSubmitted from './ContactFormSubmitted'

class Contact extends React.Component {

  render(props) {

    return (
      <React.Fragment>
        <section className="Contact sub-title">
          <div className="container">
            <div className="columns is-centered is-multiline is-mobile">

              <div className="column is-11-mobile is-8-tablet is-8-desktop">
                  <h2 className="title is-2">Contact</h2>
              </div>

              <div className="column is-8-mobile is-5-tablet is-5-desktop">
                <div className="content is-size-6">
                  <p>Interested in working with me? If so, send me a message.</p>
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