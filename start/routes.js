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

//Adonis Bake-Dessert CRUD Route
// Route.get('bake-dessert/','BakeDessertController.index').as('display_all_bakeDessert');
Route.get('bake-dessert/','BakeDessertController.index')
Route.get('bake-dessert/create','BakeDessertController.create');
Route.post('bake-dessert/create','BakeDessertController.processCreate');
Route.get('bake-dessert/:id/update','BakeDessertController.update').as('update_bD');
Route.post('bake-dessert/:id/update','BakeDessertController.processUpdate');
Route.get('bake-dessert/:id/delete','BakeDessertController.delete').as('delete_bD');
Route.post('bake-dessert/:id/delete','BakeDessertController.processDelete')
// Adonis API to Reactjs
Route.get('bake-dessert-api','BakeDessertController.index_api');

//Adonis Dishes- Main & Side CRUD Route
Route.get('dishes/','DishController.index');
// Adonis API to Reactjs
Route.get('dishes-api','DishController.index_api')

//Adonis Fesitve-Bake-Dish CRUD Route
Route.get('festive-bake-dishes/', 'FestiveController.index')
// Adonis API to Reactjs
Route.get('festive-bake-dishes-api','FestiveController.index_api')

//Cloudinary path
Route.get('cloudinary/sign','CloudinaryController.sign').as('cloudinary_sign')

//Reactjs Post data so as to create blog page
Route.post('api/bake-dessert', 'BakeDessertController.submitPost')
Route.post('api/dishes','DishController.submitPost')
Route.post('api/festive-bakes-dishes','FestiveController.submitPost')

// API Login & Register
Route.post('api/user/register','LoginController.register')
Route.post('api/user/login','LoginController.login')

//Fetch and Update Blog data
Route.put('api/bake-dessert/:id/updateBlog','BakeDessertController.updatePost')
Route.put('api/dish/:id/updateBlog','DishController.updatePost')
Route.put('api/festive-bake-dishes/:id/updateBlog','FestiveController.updatePost')

//Delete Blog
Route.post('api/bake-dessert/:id/deleteBlog','BakeDessertController.deletePost')
Route.post('api/dish/:id/deleteBlog','DishController.deletePost')
Route.post('api/festive-bake-dishes/:id/deleteBlog','DishController.deletePost')

