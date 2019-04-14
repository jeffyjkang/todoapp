const db = require("../data/dbConfig");

module.exports = {
  get: id => {
    let query = db("users");
    if (id) {
      query = db("users").where("users.id", id);
    }
    return query;
  },
  insert: user => db("users").insert(user),
  update: (id, user) => {
    return db("users")
      .where("users.id", id)
      .update(user);
  },
  remove: id => {
    return db("users")
      .where("users.id", id)
      .del();
  }
};
