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

// Adonis API to Reactjs
Route.get('bake-dessert-api','BakeDessertController.index_api');
// Adonis API to Reactjs
Route.get('dishes-api','DishController.index_api');
// Adonis API to Reactjs
Route.get('festive-bake-dishes-api','FestiveController.index_api');


//Reactjs Post data so as to create blog page

Route.post('api/bake-dessert', 'BakeDessertController.submitPost')
Route.post('api/dishes','DishController.submitPost')
Route.post('api/festive-bakes-dishes','FestiveController.submitPost')

// API Login & Register

Route.post('api/user/register','LoginController.register')
Route.post('api/user/login','LoginController.login')


//Fetch and Update Blog data from ReactJS

Route.put('api/bake-dessert/:id/updateBlog','BakeDessertController.updatePost')
Route.put('api/dish/:id/updateBlog','DishController.updatePost')
Route.put('api/festive-bake-dishes/:id/updateBlog','FestiveController.updatePost')


//Delete Blog from ReactJS

Route.post('api/bake-dessert/:id/deleteBlog','BakeDessertController.deletePost')
Route.post('api/dish/:id/deleteBlog','DishController.deletePost')
Route.post('api/festive-bake-dishes/:id/deleteBlog','DishController.deletePost')


Route.get('/','AdminController.login').as('loginPage')
Route.post('/', 'AdminController.processLogin')

Route.group( () => {
Route.get('/admin/register','AdminController.register').as('adminRegister')
Route.post('/admin/register','AdminController.processRegister')
Route.get('/logout','AdminController.logout').as('logout')
}).middleware('auth:admin');

//AdonisJS account react page
Route.group( () => {
Route.get('react-account/','LoginController.index').as('display_all_accounts')
Route.get('react-account/create', 'LoginController.create').as('create_account')
Route.post('react-account/create','LoginController.processCreate')
Route.get('react-delete-account/:id/delete','LoginController.delete').as('delete_account')
Route.post('react-delete-account/:id/delete','LoginController.processDelete')
}).middleware('auth:admin');

//AdonisJS adonis account page
Route.group( () => {
Route.get('adonis-account/', 'AdoController.index').as('display_adonis_accounts')
Route.get('adonis-delete-account/:id/delete','AdoController.delete').as('delete_adonis_account')
Route.post('adonis-delete-account/:id/delete','AdoController.processDelete')
}).middleware('auth:admin');

//Adonis Bake-Dessert CRUD Route
Route.group( () => {
Route.get('bake-dessert/','BakeDessertController.index').as('display_all_bakeDessert');
Route.get('bake-dessert/create','BakeDessertController.create').as('create_bakeDessert');
Route.post('bake-dessert/create','BakeDessertController.processCreate');
Route.get('bake-dessert/:id/update','BakeDessertController.update').as('update_bakeDessert');
Route.post('bake-dessert/:id/update','BakeDessertController.processUpdate');
Route.get('bake-dessert/:id/delete','BakeDessertController.delete').as('delete_bakeDessert');
Route.post('bake-dessert/:id/delete','BakeDessertController.processDelete');
}).middleware('auth:admin');



//Adonis Dishes- Main & Side CRUD Route
Route.group( () => {
Route.get('dishes/','DishController.index').as('display_all_dishes')
Route.get('dishes/create','DishController.create').as('create_dishes')
Route.post('dishes/create','DishController.processCreate')
Route.get('dishes/:id/update','DishController.update').as('update_dishes')
Route.post('dishes/:id/update','DishController.processUpdate')
Route.get('dishes/:id/delete','DishController.delete').as('delete_dishes')
Route.post('dishes/:id/delete','DishController.processDelete')
}).middleware(['auth:admin']);


//Adonis Fesitve-Bake-Dish CRUD Route
Route.group( () => {
Route.get('festive-bake-dishes/', 'FestiveController.index').as('display_all_festive')
Route.get('festive-bake-dishes/create','FestiveController.create').as('create_festive')
Route.post('festive-bake-dishes/create','FestiveController.processCreate')
Route.get('festive-bake-dishes/:id/update','FestiveController.update').as('update_festive')
Route.post('festive-bake-dishes/:id/update','FestiveController.processUpdate')
Route.get('festive-bake-dishes/:id/delete','FestiveController.delete').as('delete_festive')
Route.post('festive-bake-dishes/:id/delete','FestiveController.processDelete')
}).middleware(['auth:admin']);


//Cloudinary path
Route.get('cloudinary/sign','CloudinaryController.sign').as('cloudinary_sign').middleware(['auth:admin']);



