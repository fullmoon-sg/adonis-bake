'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FestiveBakeDishSchema extends Schema {
  up () {
    this.create('festive_bake_dishes', (table) => {
      table.increments()
      table.string('category',100).notNullable();
      table.string('title',100).notNullable();
      table.text('description').notNullable();
      table.text('description_1').Nullable();
      table.text('description_2').Nullable();
      table.string('image_url', 100).Nullable();
      table.string('image_url_1', 100).Nullable();
      table.string('image_url_2', 100).Nullable();
      table.string('image_url_3', 100).Nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('festive_bake_dishes')
  }
}

module.exports = FestiveBakeDishSchema
