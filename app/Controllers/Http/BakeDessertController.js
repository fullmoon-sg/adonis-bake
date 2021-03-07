'use strict'

const BakeDessert = use('App/Models/BakeDessert')
const Config = use('Config')

class BakeDessertController {

async index({view}){
  let bakeDessert = await BakeDessert.all();
  return view.render('bakeDessert/index', {
    bakeDessert : bakeDessert.toJSON()
  })
}

create({view}){
  return view.render('bakeDessert/create', {
    cloudinaryName : Config.get('cloudinary.name'),
    cloudinaryPreset : Config.get('cloudinary.preset'),
    cloudinaryApiKey: Config.get('cloudinary.api_key'),
    signUrl: '/cloudinary/sign'
  })
}

async processCreate({request,response}){
  let body = request.post();
  let bakeDessert = new BakeDessert();
  bakeDessert.category = body.category;
  bakeDessert.description = body.description;
  bakeDessert.image_url = body.image_url;
  await bakeDessert.save();
  return response.redirect('/bake-dessert')
}

async update({view,params}){
  let bakeDessert = await BakeDessert.find(params.id);
  return view.render('bakeDessert/update', {
    bakeDessert : bakeDessert.toJSON()
  })
}

async processUpdate({request,response,params}){
  let bakeDessert = await BakeDessert.find(params.id);
  let updateData = request.post();
  bakeDessert.category = updateData.category;
  bakeDessert.description = updateData.description;
  bakeDessert.save();
  return response.redirect('/bake-dessert')
}

async delete({view,params}){
  let bakeDessert = await BakeDessert.find(params.id);
  return view.render('bakeDessert/delete', {
    bakeDessert : bakeDessert.toJSON()
  })
}

async processDelete({params,response}){
  let bakeDessert = await BakeDessert.find(params.id);
  await bakeDessert.delete();
  return response.redirect('/bake-dessert')
}

}

module.exports = BakeDessertController
