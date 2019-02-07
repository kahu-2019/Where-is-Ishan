
exports.up = (knex, Promise) => {
  return knex.schema.createTable('locations', table => {
    table.increments('id')
    table.string('coordinates')
    table.string('name')
    table.string('zoom')
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('locations')
};
