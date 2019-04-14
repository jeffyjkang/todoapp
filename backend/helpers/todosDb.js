const db = require("../data/dbConfig");

module.exports = {
  get: id => {
    let query = db("todos");
    if (id) {
      query = db("todos").where("todos.id", id);
    }
    return query;
  },
  insert: todo => db("todos").insert(todo),
  update: (id, todo) => {
    return db("todos")
      .where("todos.id", id)
      .update(todo);
  },
  remove: id => {
    return db("todos")
      .where("todos.id", id)
      .del();
  }
};
