 'use strict'

const BakeDessert = use('App/Models/BakeDessert')
const User = use('App/Models/User')
const Config = use('Config')

class BakeDessertController {

  //Adonis View
  async index ({ view }){
    let bakeDessert = await BakeDessert.all();
    return view.render('bakeDessert/index', {
      bakeDessert : bakeDessert.toJSON()
    })
  }

  //Adonis Create Post

  create({ view }) {
    return view.render('bakeDessert/create', {
      cloudinaryName: Config.get('cloudinary.name'),
      cloudinaryPreset: Config.get('cloudinary.preset'),
      cloudinaryApiKey: Config.get('cloudinary.api_key'),
      signUrl: '/cloudinary/sign'
    })
  }

  async processCreate({ request, response }) {
    let body = request.post();
    let bakeDessert = new BakeDessert();
    bakeDessert.category = body.category;
    bakeDessert.title = body.title;
    bakeDessert.description = body.description;
    bakeDessert.description_1 = body.description_1;
    bakeDessert.description_2 = body.description_2;
    bakeDessert.image_url = body.image_url;
    bakeDessert.image_url_1 = body.image_url_1;
    bakeDessert.image_url_2 = body.image_url_2;
    bakeDessert.image_url_3 = body.image_url_3;
    await bakeDessert.save();
    return response.redirect('/bake-dessert')
  }

  //Adonis Update Post

  async update({ view, params }) {
    let bakeDessert = await BakeDessert.find(params.id);
    return view.render('bakeDessert/update', {
      bakeDessert: bakeDessert
    })
  }

  async processUpdate({ request, response, params }) {
    let bakeDessert = await BakeDessert.find(parms.id);
    let updateData = request.post();
    bakeDessert.category = updateData.category;
    bakeDessert.title = updateData.title;
    bakeDessert.description = updateData.description;
    bakeDessert.description_1 = updateData.description_1;
    bakeDessert.description_2 = updateData.description_2;
    bakeDessert.image_url = updateData.image_url;
    bakeDessert.image_url_1 = updateData.image_url_1;
    bakeDessert.image_url_2 = updateData.image_url_2;
    bakeDessert.image_url_3 = updateData.image_url_3;
    bakeDessert.save();
    return response.redirect('/bake-dessert')
  }

//Adonis JS delete post
  async delete({ view, params }) {
    let bakeDessert = await BakeDessert.find(params.id);
    return view.render('bakeDessert/delete', {
      bakeDessert: bakeDessert
    })
  }

  async processDelete({ params, response }) {
    let bakeDessert = await BakeDessert.find(params.id );
    await bakeDessert.delete();
    return response.redirect('/bake-dessert')
  }

   //Adonis API to ReactJs view
  async index_api({ response }) {
    let bakeDessert = await BakeDessert.all();
    response.json(bakeDessert)
  }

  //Create new Post via ReactJS
  async submitPost({ request, response }) {
    let body = request.post();
    let bakeDessert = new BakeDessert();
    bakeDessert.category = body.category;
    bakeDessert.title = body.title;
    bakeDessert.description = body.description;
    bakeDessert.description_1 = body.description_1;
    bakeDessert.description_2 = body.description_2;
    bakeDessert.image_url = body.image_url;
    bakeDessert.image_url_1 = body.image_url_1;
    bakeDessert.image_url_2 = body.image_url_2;
    bakeDessert.image_url_3 = body.image_url_3;
    await bakeDessert.save();
    return response.redirect('../bake-dessert')
  }

//Update Post via ReactJS
  async updatePost({request,auth,response,params}){
    let user = await auth.authenticator('api').getUser();
    let bake_dessert_update = await BakeDessert.find(params.id);
    let updateData = request.post();
    bake_dessert_update.category = updateData.category;
    bake_dessert_update.title = updateData.title;
    bake_dessert_update.description = updateData.description;
    bake_dessert_update.description_1 = updateData.description_1;
    bake_dessert_update.description_2 = updateData.description_2;
    bake_dessert_update.image_url = updateData.image_url;
    bake_dessert_update.image_url_1 = updateData.image_url_1;
    bake_dessert_update.image_url_2 = updateData.image_url_2;
    bake_dessert_update.image_url_3 = updateData.image_url_3;
    console.log(bake_dessert_update.title)
    await bake_dessert_update.save();
    return response.json("Save successfully");
  }

   //Delete via ReactJS

  async deletePost({params,auth, response}){
    let user = await auth.authenticator('api').getUser();
    let bake_dessert_item = await BakeDessert.find(params.id);
    await bake_dessert_item.delete();
    return response.json("Successfully Deleted")
  }
}


module.exports = BakeDessertController
