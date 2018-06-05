import {createForms} from 'react-redux-form'

export const message = {
  name: '',
  email: ''
}

export default createForms({
  message
})