exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments().primary();
    tbl
      .string("username", 256)
      .notNullable()
      .unique();
    tbl.string("password", 256).notNullable();
    tbl
      .string("email", 256)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
