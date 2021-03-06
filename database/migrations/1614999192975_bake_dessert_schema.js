'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BakeDessertSchema extends Schema {
  up () {
    this.create('bake_desserts', (table) => {
      table.increments()
      table.string('category',100).notNullable();
      table.text('description').notNullable();
      table.string('image_url', 100);
      table.timestamps()
    })
  }

  down () {
    this.drop('bake_desserts')
  }
}

module.exports = BakeDessertSchema
