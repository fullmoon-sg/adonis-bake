'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AdminToken extends Model {

  admin() {
    return this.belongsTo('App/Models/Admin')
  }
}

module.exports = AdminToken
