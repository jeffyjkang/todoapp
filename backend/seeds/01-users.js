exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "morning", password: "goodmorning" },
        { id: 2, username: "afternoon", password: "goodafternoon" },
        { id: 3, username: "evening", password: "goodevening" }
      ]);
    });
};
