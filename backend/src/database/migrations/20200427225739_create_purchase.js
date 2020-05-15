exports.up = function (knex) {
  return knex.schema.createTable('purchase', function (table) {
    table.increments();

    table.string('codigo').notNullable();
    table.decimal('value').notNullable();
    table.date('data').notNullable();

    table.string('revendedor_id').notNullable();

    table.foreign('revendedor_id').references('id').inTable('revendedor');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('purchase');
};
