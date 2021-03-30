'use strict'

const MainSide = use('App/Models/MainSide');
const User =use('App/Models/User');
const Config = use('Config')


class DishController {

  //Adonis View
  async index({view}){
    let mainSide = await MainSide.all();
    return view.render('dishes/index', {
      mainSide : mainSide.toJSON()
    })
  }

  //Adonis Create Post

  create({ view }) {
    return view.render('dishes/create', {
      cloudinaryName: Config.get('cloudinary.name'),
      cloudinaryPreset: Config.get('cloudinary.preset'),
      cloudinaryApiKey: Config.get('cloudinary.api_key'),
      signUrl: '/cloudinary/sign'
    })
  }

  async processCreate({ request, response }) {
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
    return response.redirect('/dishes')
  }

//Adonis JS update
  async update({ view, params }) {
    let mainSide = await MainSide.find(params.id);
    return view.render('dishes/update', {
      mainSide: mainSide
    })
  }

  async processUpdate({ request, response, params }) {
    let mainSide = await MainSide.find(params.id);
    let updateData = request.post();
    mainSide.category = updateData.category;
    mainSide.title = updateData.title;
    mainSide.description = updateData.description;
    mainSide.description_1 = updateData.description_1;
    mainSide.description_2 = updateData.description_2;
    mainSide.image_url = updateData.image_url;
    mainSide.image_url_1 = updateData.image_url_1;
    mainSide.image_url_2 = updateData.image_url_2;
    mainSide.image_url_3 = updateData.image_url_3;
    mainSide.save();
    return response.redirect('/dishes')
  }

  //Adonis JS delete
   async delete({ view, params }) {
    let  mainSide = await MainSide.find(params.id);
    return view.render('dishes/delete', {
       mainSide:  mainSide
    })
  }

  async processDelete({ params, response }) {
    let  mainSide = await MainSide.find(params.id );
    await  mainSide.delete();
    return response.redirect('/dishes')
  }

  //Adonis API to ReactJs view
  async index_api({response}){
    let mainSide = await MainSide.all();
    response.json(mainSide)
  }

   //Create new Post via ReactJS
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

  //Update Post via ReactJS
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

  //Delete via ReactJS
  async deletePost({params, auth, response}){
    let user = await auth.authenticator('api').getUser();
    let dishes = await MainSide.find(params.id);
    await dishes.delete();
    return response.json("Successfully Deleted");
  }

}

module.exports = DishController
