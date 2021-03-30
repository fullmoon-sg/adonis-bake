'use strict'

const User = use('App/Models/User')

class LoginController {

  async index ({view}){
    let users = await User.all();
    return view.render('account/index', {
      accounts : users.toJSON()
    })
  }

  async create({ view}){
    let user = await User.all();
    return view.render('account/create', {
      accounts : user.toJSON()
    })
  }

 async processCreate({ request, response}){
    let body = request.post();
    let user = new User();
    user.username = body.username;
    user.email = body.email;
    user.password = body.password;
    await user.save();
    return response.redirect('/account')
 }

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

  //Adonis JS delete
   async delete({ view, params }) {
    let  user = await User.find(params.id);
    return view.render('account/delete', {
       account :  user
    })
  }

  async processDelete({ params, response }) {
    let  user = await User.find(params.id );
    await  user.delete();
    return response.redirect('/account')
  }

}

module.exports = LoginController
