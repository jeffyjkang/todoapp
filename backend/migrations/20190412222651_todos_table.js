exports.up = function(knex, Promise) {
  return knex.schema.createTable("todos", tbl => {
    tbl.increments().primary();
    tbl.string("title").notNullable();
    tbl.date("date").notNullable();
    tbl.string("description").notNullable();
    tbl
      .integer("userId")
      .unsigned()
      .notNullable()
      .references("users.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("todos");
};
