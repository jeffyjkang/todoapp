const express = require("express");
const router = express.Router();
const todosDb = require("../helpers/todosDb");
const auth = require("../middleware/Authorization");

// post route

// get route
router.get("/", async (req, res) => {
  try {
    const todos = await todosDb.get();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "There was an error getting the todos." });
  }
});
// put route

// delete route

module.exports = router;
