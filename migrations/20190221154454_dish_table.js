exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', tbl => {
    tbl.increments();

    tbl
      .string('dishName', 128)
      .notNullable()
      .unique();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dish');
};
