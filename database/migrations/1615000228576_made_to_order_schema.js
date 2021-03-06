'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MadeToOrderSchema extends Schema {
  up () {
    this.create('made_to_orders', (table) => {
      table.increments()
       table.string('category',100).notNullable();
      table.text('description').notNullable();
      table.string('image_url', 100);
      table.timestamps()
    })
  }

  down () {
    this.drop('made_to_orders')
  }
}

module.exports = MadeToOrderSchema
