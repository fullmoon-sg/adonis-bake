'use strict'

const FestiveBakeDish = use('App/Models/FestiveBakeDish');
const User = use('App/Models/User')
const Config = use('Config')


class FestiveController {

  async index({view}){
    let festive = await FestiveBakeDish.all();
    return view.render('festivebakedish/index', {
      festiveBakeDish : festive.toJSON()
    })
  }

  async index_api({response}){
    let festiveBakeDish = await FestiveBakeDish.all();
    response.json(festiveBakeDish)
  }

   async updatePost({request,auth,response,params}){
    let user = await auth.authenticator('api').getUser();
    let festive_update = await FestiveBakeDish.find(params.id);
    let updateData = request.post();
    festive_update.category = updateData.category;
    festive_update.title = updateData.title;
    festive_update.description = updateData.description;
    festive_update.description_1 = updateData.description_1;
    festive_update.description_2 = updateData.description_2;
    festive_update.image_url = updateData.image_url;
    festive_update.image_url_1 = updateData.image_url_1;
    festive_update.image_url_2 = updateData.image_url_2;
    festive_update.image_url_3 = updateData.image_url_3;
    await festive_update.save();
    return response.json("Save successfully");
  }

  async submitPost({ request, response }) {
    let body = request.post();
    let festiveBakeDish = new FestiveBakeDish();
    festiveBakeDish.category = body.category;
    festiveBakeDish.title = body.title;
    festiveBakeDish.description = body.description;
    festiveBakeDish.description_1 = body.description_1;
    festiveBakeDish.description_2 = body.description_2;
    festiveBakeDish.image_url = body.image_url;
    festiveBakeDish.image_url_1 = body.image_url_1;
    festiveBakeDish.image_url_2 = body.image_url_2;
    festiveBakeDish.image_url_3 = body.image_url_3;
    await festiveBakeDish.save();
    return response.redirect('../festive-bakes-dishes')
  }
}

module.exports = FestiveController
