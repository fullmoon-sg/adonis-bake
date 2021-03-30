'use strict'

const FestiveBakeDish = use('App/Models/FestiveBakeDish');
const User = use('App/Models/User')
const Config = use('Config')


class FestiveController {

  //Adonis JS view
  async index({view}){
    let festive = await FestiveBakeDish.all();
    return view.render('festivebakedish/index', {
      festiveBakeDish : festive.toJSON()
    })
  }

  //Adonis Create Post
  create({ view }) {
    return view.render('festivebakedish/create', {
      cloudinaryName: Config.get('cloudinary.name'),
      cloudinaryPreset: Config.get('cloudinary.preset'),
      cloudinaryApiKey: Config.get('cloudinary.api_key'),
      signUrl: '/cloudinary/sign'
    })
  }

  async processCreate({ request, response }) {
    let body = request.post();
    let festive = new FestiveBakeDish();
   festive.category = body.category;
    festive.title = body.title;
   festive.description = body.description;
    festive.description_1 = body.description_1;
    festive.description_2 = body.description_2;
    festive.image_url = body.image_url;
   festive.image_url_1 = body.image_url_1;
    festive.image_url_2 = body.image_url_2;
    festive.image_url_3 = body.image_url_3;
    await festive.save();
    return response.redirect('/display_all_festive')
  }

  //Adonis JS update
  async update({ view, params }) {
    let festive = await FestiveBakeDish.find(params.id);
    return view.render('festivebakedish/update', {
      festive: festive
    })
  }

  async processUpdate({ request, response, params }) {
    let festive = await FestiveBakeDish.find(params.id);
    let updateData = request.post();
    festive.category = updateData.category;
    festive.title = updateData.title;
    festive.description = updateData.description;
    festive.description_1 = updateData.description_1;
    festive.description_2 = updateData.description_2;
    festive.image_url = updateData.image_url;
    festive.image_url_1 = updateData.image_url_1;
    festive.image_url_2 = updateData.image_url_2;
    festive.image_url_3 = updateData.image_url_3;
    festive.save();
    return response.redirect('/display_all_festive')
  }

  //Adonis JS delete
   async delete({ view, params }) {
    let  festive = await FestiveBakeDish.find(params.id);
    return view.render('festivebakedish/delete', {
       festive:  festive
    })
  }

  async processDelete({ params, response }) {
    let  festive = await FestiveBakeDish.find(params.id );
    await  festive.delete();
    return response.redirect('/display_all_festive')
  }


  //Adonis API to ReactJs view
  async index_api({response}){
    let festiveBakeDish = await FestiveBakeDish.all();
    response.json(festiveBakeDish)
  }

   //Create new Post via ReactJS
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

  //Update Post via ReactJS
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

   //Delete via ReactJS
  async deletePost({params, auth, response}){
    let user = await auth.authenticator('api').getUser();
    let festive = await FestiveBakeDish.find(params.id);
    await festive.delete();
    return response.json('Successfully Deleted')
  }

}

module.exports = FestiveController
