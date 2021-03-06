'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FestiveBakeDishSchema extends Schema {
  up () {
    this.create('festive_bake_dishes', (table) => {
      table.increments()
       table.string('category',100).notNullable();
      table.text('description').notNullable();
      table.string('image_url', 100);
      table.timestamps()
    })
  }

  down () {
    this.drop('festive_bake_dishes')
  }
}

module.exports = FestiveBakeDishSchema
