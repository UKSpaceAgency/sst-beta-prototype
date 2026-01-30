//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/account/superadmin/invite-new-member', function(request, response) {

    var userrole = request.session.data['userrole']
    if (userrole == "government-admin"){
        response.redirect("/account/superadmin/choose-alert-settings")
    } if (userrole == "government-user"){
        response.redirect("/account/superadmin/choose-alert-settings")
    }if (userrole == "agency-user"){
        response.redirect("/account/superadmin/choose-alert-settings")
    }
    if (userrole == "agency-admin"){
        response.redirect("/account/superadmin/choose-alert-settings")
    }
    if (userrole == "agency-analyst"){
        response.redirect("/account/superadmin/choose-alert-settings")
    }
    if (userrole == "agency-approver"){
        response.redirect("/account/superadmin/choose-alert-settings")
    }
    if (userrole == "agency-superuser"){
        response.redirect("/account/superadmin/choose-alert-settings")
    } else {
        response.redirect("/account/superadmin/check-user-details2")
    }

})


router.post('/search', function (req, res) {
  // Optional but useful: make sure the flag is set even if the hidden input is missing
  req.session.data.hasRunSearch = 'true'

  // Redirect back to the same page so you're "staying on the page"
  res.redirect('/search')
})
