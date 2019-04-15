const express = require("express");
const router = express.Router();
const usersDb = require("../helpers/usersDb");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/Authorization");

// post route
// register
router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    const id = await usersDb.insert(user);
    const token = auth.generateToken(user);
    res.status(201).json(token);
  } catch (error) {
    res.status(500).json({ error: "There was an error registering user." });
  }
});
// login
router.post("/login", async (req, res) => {
  try {
    const credentials = req.body;
    const user = await usersDb
      .get()
      .where({ username: credentials.username })
      .first();
    if (user && bcrypt.compareSync(credentials.password, user.password)) {
      const token = auth.generateToken(user);
      res.status(201).json(token);
    } else {
      res.status(401).json({ error: "Incorrect credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "There was an error logging in user." });
  }
});

// get route
router.get("/", async (req, res) => {
  try {
    const users = await usersDb.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "There was an error retreiving the users." });
  }
});

router.get("/:id", auth.authorize, async (req, res) => {
  try {
    const decodedToken = req.decodedToken;
    const id = req.params.id;
    console.log(id);
    console.log(decodedToken);
    const user = await usersDb.get(id).first();
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "There was an error retreiving the user." });
  }
});
// put route

// delete route

module.exports = router;
