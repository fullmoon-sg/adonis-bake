'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BakeDessertSchema extends Schema {
  up () {
    this.create('bake_desserts', (table) => {
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
    this.drop('bake_desserts')
  }
}

module.exports = BakeDessertSchema
