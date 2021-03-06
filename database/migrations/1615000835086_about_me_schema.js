'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AboutMeSchema extends Schema {
  up () {
    this.create('about_mes', (table) => {
      table.increments()
        table.string('category', 100).notNullable();
      table.text('description').notNullable();
      table.string('image_url', 100);
      table.timestamps()
    })
  }

  down () {
    this.drop('about_mes')
  }
}

module.exports = AboutMeSchema
