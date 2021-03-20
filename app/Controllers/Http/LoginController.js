'use strict'

const User = use('App/Models/User')

class LoginController {

  async register({ request, response }) {
    try {
      let data = request.post();
      console.log(data)
      let newUser = new User();
      newUser.username = data.username;
      newUser.email = data.email;
      newUser.password = data.password;
      await newUser.save();
      return response.json(newUser.toJSON())
    } catch (e) {
      console.log(e)
    }
  }

  async login({ request, response, auth }) {
    let data = request.post();
    let username = data.username;
    let password = data.password;
    let token = await auth.authenticator('api').attempt(username, password)
    console.log(token)
    return response.json(token)
  }

}

module.exports = LoginController
