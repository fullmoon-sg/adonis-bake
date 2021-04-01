'use strict'

const Admin = use('App/Models/Admin')
const Hash = use('Hash')

class AdminController {

  login({ view }) {
    return view.render('admin/loginPage')
  }

  async processLogin({ auth, request, response, session }) {
    let body = request.post()
    let loggedInAdmin = await Admin.findBy('username', body.username)

    await Hash.verify('plain-value', 'hashed-value')
    if (!loggedInAdmin) {
      session
        .withErrors({ username: 'Username is not a registered user' })
        .flashAll()
      return response.redirect('back')
    }
    else {
      let loggedInAdminJ = loggedInAdmin.toJSON()
      let verifyPassword = await Hash.verify(body.password, loggedInAdminJ.password)
      if (!verifyPassword) {
        session
          .withErrors({ password: 'Incorrect password' })
          .flashAll()
        return response.redirect('back')
      }

      else {
        await auth.authenticator('admin').attempt(body.username, body.password);
        session.flash({ 'notification' : "You have registered succesfully" })
        response.route('/bake-dessert')
      }

      // await auth.authenticator('admin').attempt(body.username, body.password)
      // response.route('UsersList')
    }
  }

  register({ view }) {
    return view.render('admin/register')
  }

  async processRegister({ request, response, session }) {
    let body = request.post()
    let newAdmin = new Admin()
    newAdmin.username = body.username
    newAdmin.password = body.password
    await newAdmin.save()
    session.flash({ successMessage: "You have registered succesfully" })
    response.route('/adonis-account')
  }

  async logout({ request, response, auth }) {

    await auth.logout()
    return response.route('/')

    //     const refreshToken = request.input('refreshToken');

    //     await auth
    //         .authenticator('api')
    //         .revokeTokens([refreshToken], true)
    //     return response.route('loginPage')
    // }
  }

}


module.exports = AdminController
