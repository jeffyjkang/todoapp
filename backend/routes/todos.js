const express = require("express");
const router = express.Router();
const todosDb = require("../helpers/todosDb");
const auth = require("../middleware/Authorization");

// post route
router.post("/", auth.authorize, async (req, res) => {
  const { title, date, description } = req.body;
  const userId = req.decodedToken.sub;
  if (!title) {
    res.status(400).json({ error: "Missing title value." });
  } else if (!date) {
    res.status(400).json({ error: "Missing date value." });
  } else if (!description) {
    res.status(400).json({ error: "Missing description value." });
  }
  try {
    const todo = await todosDb.insert({ title, date, description, userId });
    console.log(todo);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: "There was an error adding a todo." });
  }
});

// get route
// router.get("/", async (req, res) => {
//   try {
//     const todos = await todosDb.get();
//     res.status(200).json(todos);
//   } catch (error) {
//     res.status(500).json({ error: "There was an error getting the todos." });
//   }
// });

router.get("/", auth.authorize, async (req, res) => {
  const userId = req.decodedToken.sub;
  try {
    const todos = await todosDb.get().where("todos.userId", "=", userId);
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "There was an error retrieving the todos." });
  }
});

router.get("/:id", auth.authorize, async (req, res) => {
  const decodedToken = req.decodedToken;
  const id = req.params.id;
  try {
    const todo = await todosDb.get(id).first();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "There was an error retreiving the todo." });
  }
});
// put route
router.put("/:id", auth.authorize, async (req, res) => {
  const id = req.params.id;
  const { title, date, description } = req.body;
  if (!title) {
    res.status(400).json({ error: "Missing title value." });
  } else if (!date) {
    res.status(400).json({ error: "Missing date value." });
  } else if (!description) {
    res.status(400).json({ error: "Missing description value." });
  }
  try {
    const todo = await todosDb.update(id, {
      ...req.body,
      title,
      date,
      description
    });
    if (!todo) {
      res
        .status(400)
        .json({ error: "The todo with the specified id does not exist." });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "There was an errror updating the todo." });
  }
});

// delete route
router.delete("/:id", auth.authorize, async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await todosDb.remove(id);
    if (!todo) {
      res
        .status(400)
        .json({ error: "The todo with the specified id does not exist." });
    }
    res.status(200).json({ message: "Todo was deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "There was an error deleting the todo." });
  }
});

module.exports = router;
