exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('projects', (table) => {
    table.increments('id')
    table.string('title')
    table.string('image')
    table.string('copy')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
}
