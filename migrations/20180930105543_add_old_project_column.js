
exports.up = function(knex, Promise) {
  return knex.schema.table('projects', (table) => {
    table.boolean('old_project')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('projects', function(table) {
    table.dropColumn('old_project')
  })
}
