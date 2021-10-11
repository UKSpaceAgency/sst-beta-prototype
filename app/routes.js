const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/login-email-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var email-address = req.session.data['email-address']

  // Check whether the variable matches a condition
  if (email-address == "thepsc@space.co.uk"){
    // Send user to next page
    res.redirect('/sucessful-login')
  } else {
    // Send user to ineligible page
    res.redirect('/invalid-email')
  }

})
module.exports = router
