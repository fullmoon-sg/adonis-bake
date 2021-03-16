'use strict'

const MainSide = use('App/Models/MainSide');
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
