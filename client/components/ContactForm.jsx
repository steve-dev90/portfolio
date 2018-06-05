import React from 'react'
import {connect} from 'react-redux'
import {Field, Control, Errors, Form, track} from 'react-redux-form'
import {sendEmail} from '../actions/contact'

const required = (val) => val && val.length
//const maxLength = (len) => (val) => val.length <= len

class ContactForm extends React.Component {

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
    
  handleSubmit (input) {
    console.log (input)  
    const {dispatch} = this.props
    dispatch(sendEmail(input.name, 'akhds', input.email, 'sssssss'))
    //dispatch(actions.reset('item'))
  }
    
  render(props) {
    return (
      <React.Fragment> 
        <Form model="message" onSubmit={this.handleSubmit}>
            <div className="field">
            <label>Name:</label>
            <Control.text
                model=".name"
                validators={{
                required
                //maxLength: maxLength(15)
                }}
            />
            <Errors
                className="errors"
                model=".name"
                show="touched"
                messages={{
                required: 'Required'
                //maxLength: 'Must be 15 characters or less',
                }}
            />
            </div>

            <div className="field">
            <label>Email:</label>
            <Control.text
                model=".email"
                validators={{
                required,
                validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
                }}
            />
            <Errors
                className="errors"
                model="user.email"
                show="touched"
                messages={{
                required: 'Required',
                validEmail: 'Invalid email address',
                }}
            />
            </div>
                        
            <button type="submit">
            Submit
            </button>

        </Form>

      </React.Fragment>   
    
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state)  
  return {portfolio: state.portfolio}
}

export default connect(mapStateToProps)(ContactForm) 