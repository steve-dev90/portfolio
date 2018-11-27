//Based  on https://github.com/binhc/react-nodemailer

require('dotenv').config()

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
//const creds = require('../config');

var transport = {
  service: 'SendGrid', 
  auth: {
    user: process.env.SENDGRID_USERNAME,
    pass: process.env.SENDGRID_PASSWORD
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/', (req, res, next) => {
  console.log('email', req.body) 
  console.log('creds', process.env.USERNAME) 
  let name = req.body.name
  let subject = req.body.subject
  let email = req.body.email  
  let message = req.body.message
  let content = ` name: ${name}\n subject: ${subject}\n email: ${email}\n  message: ${message} `

  let mail = {
    from: 'app95715829@heroku.com',
    to: 'contactstorrens@gmail.com',  
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;