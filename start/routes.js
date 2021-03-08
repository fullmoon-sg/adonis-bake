'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

//Bake-Dessert CRUD Route
Route.get('bake-dessert/','BakeDessertController.index').as('display_all_bakeDessert');
Route.get('bake-dessert-api','BakeDessertController.index_api');
Route.get('bake-dessert/create','BakeDessertController.create');
Route.post('bake-dessert/create','BakeDessertController.processCreate');
Route.get('bake-dessert/:id/update','BakeDessertController.update');
Route.post('bake-dessert/:id/update','BakeDessertController.processUpdate');
Route.get('bake-dessert/:id/delete','BakeDessertController.delete');
Route.post('bake-dessert/:id/delete','BakeDessertController.processDelete')

//Cloudinary path
Route.get('cloudinary/sign','CloudinaryController.sign').as('cloudinary_sign')
