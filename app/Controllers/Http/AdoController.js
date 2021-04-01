'use strict'

const Admin = use('App/Models/Admin')

class AdoController {

  async index ({view}){
    let admin = await Admin.all();
    return view.render('adonis-account/index', {
      accounts : admin.toJSON()
    })
  }

  //Adonis JS delete
   async delete({ view, params }) {
    let  admin = await Admin.find(params.id);
    return view.render('adonis-account/delete', {
       account :  admin
    })
  }

  async processDelete({ params, response }) {
    let  admin = await Admin.find(params.id);
    await admin.delete();
    return response.redirect('/adonis-account')
  }
}

module.exports = AdoController
