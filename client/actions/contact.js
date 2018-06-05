import request from 'superagent'

export function sendEmail (name, subject, email, message) {
    return (dispatch) => {
      request
        .post(`/api/email`)
        .send({ name, subject, email, message})
        .end((err, res) => {
          if (err) {
            console.error(err.message)
            return
          }
        }) 
    }
}    