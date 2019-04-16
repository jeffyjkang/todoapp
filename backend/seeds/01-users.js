exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "morning",
          password: "goodmorning",
          email: "morning@email.com"
        },
        {
          id: 2,
          username: "afternoon",
          password: "goodafternoon",
          email: "afternoon@email.com"
        },
        {
          id: 3,
          username: "evening",
          password: "goodevening",
          email: "evening@email.com"
        }
      ]);
    });
};
