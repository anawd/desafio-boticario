exports.up = function (knex) {
  return knex.schema.createTable('revendedor', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.decimal('cpf', 11).notNullable();
    table.string('email').notNullable();
    table.string('senha').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('revendedor');
};
