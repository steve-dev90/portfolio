import {createForms} from 'react-redux-form'

export const form_message = {
  name: '',
  subject: '',
  email: '',
  message: ''
}

export default createForms({
  form_message
})