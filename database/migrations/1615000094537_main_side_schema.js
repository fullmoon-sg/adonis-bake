'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MainSideSchema extends Schema {
  up () {
    this.create('main_sides', (table) => {
      table.increments()
       table.string('category',100).notNullable();
      table.text('description').notNullable();
      table.string('image_url', 100);
      table.timestamps()
    })
  }

  down () {
    this.drop('main_sides')
  }
}

module.exports = MainSideSchema
