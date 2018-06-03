exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('projects', (table) => {
    table.increments('id')
    table.string('project_image')
    table.string('project_copy')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
}
