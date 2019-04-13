exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, username: "morning", password: "goodmorning" },
        { id: 2, username: "afternoon", password: "goodafternoon" },
        { id: 3, username: "evening", password: "goodevening" }
      ]);
    });
};
