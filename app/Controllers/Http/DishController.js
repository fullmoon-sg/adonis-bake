'use strict'

const MainSide = use('App/Models/MainSide');
const User =use('App/Models/User');
const Config = use('Config')


class DishController {

  async index({view}){
    let mainSide = await MainSide.all();
    return view.render('dishes/index', {
      mainSide : mainSide.toJSON()
    })
  }

  async index_api({response}){
    let mainSide = await MainSide.all();
    response.json(mainSide)
  }

   async updatePost({request,auth,response,params}){
    let user = await auth.authenticator('api').getUser();
    let mainSide_update = await MainSide.find(params.id);
    let updateData = request.post();
    mainSide_update.category = updateData.category;
    mainSide_update.title = updateData.title;
    mainSide_update.description = updateData.description;
    mainSide_update.description_1 = updateData.description_1;
    mainSide_update.description_2 = updateData.description_2;
    mainSide_update.image_url = updateData.image_url;
    mainSide_update.image_url_1 = updateData.image_url_1;
    mainSide_update.image_url_2 = updateData.image_url_2;
    mainSide_update.image_url_3 = updateData.image_url_3;
    await mainSide_update.save();
    return response.json("Save successfully");
  }

  async submitPost({ request, response }) {
    let body = request.post();
    let mainSide = new MainSide();
    mainSide.category = body.category;
    mainSide.title = body.title;
    mainSide.description = body.description;
    mainSide.description_1 = body.description_1;
    mainSide.description_2 = body.description_2;
    mainSide.image_url = body.image_url;
    mainSide.image_url_1 = body.image_url_1;
    mainSide.image_url_2 = body.image_url_2;
    mainSide.image_url_3 = body.image_url_3;
    await mainSide.save();
    return response.redirect('../dishes')
  }
}

module.exports = DishController
