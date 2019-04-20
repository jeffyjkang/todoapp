const express = require("express");
const router = express.Router();
const usersDb = require("../helpers/usersDb");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/Authorization");

// temporary password
let tempPw = "pass";

// post route
// register
router.post("/register", async (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;
  try {
    const id = await usersDb.insert(user);
    const token = auth.generateToken(user);
    res.status(201).json(token);
  } catch (error) {
    res.send(error);
  }
});
// login
router.post("/login", async (req, res) => {
  const credentials = req.body;
  try {
    const user = await usersDb
      .get()
      .where({ username: credentials.username })
      .first();
    if (user && bcrypt.compareSync(credentials.password, user.password)) {
      const token = auth.generateToken(user);
      res.status(200).json(token);
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

// forgot pw route
router.get("/forgotpw", async (req, res) => {
  const username = req.headers.username;
  const email = req.headers.email;
  let password = req.headers.password;
  try {
    const user = await usersDb
      .get()
      .where("username", "=", username)
      .first();
    if (user.email !== email) {
      res.send("Email is incorrect");
    } else if (user && tempPw === password) {
      const token = auth.generateToken(user);
      res.status(200).json(token);
    } else {
      res.send("Incorrect temporary password");
    }
  } catch (error) {
    res.send("Username is incorrect");
  }
});
// get by id
router.get("/id", auth.authorize, async (req, res) => {
  const decodedToken = req.decodedToken;
  // console.log(decodedToken);
  const id = decodedToken.sub;
  try {
    const user = await usersDb.get(id).first();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "There was an error retreiving the user." });
  }
});
// put route
router.put("/:id", auth.authorize, async (req, res) => {
  //
  const decodedToken = req.decodedToken;
  const id = req.params.id;
  let password = req.body.password;
  const hash = bcrypt.hashSync(password, 14);
  password = hash;
  try {
    if (!password) {
      res.status(400).json({ error: "Missing password value." });
    }
    const user = await usersDb.update(id, {
      ...req.body,
      password
    });
    if (!user) {
      res
        .status(400)
        .json({ error: "The user with the specified id does not exist." });
    }
    const token = auth.generateToken(user);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error: "There was an error updating the user." });
  }
});

// delete route
router.delete("/:id", auth.authorize, async (req, res) => {
  decodedToken = req.decodedToken;
  const id = decodedToken.sub;
  try {
    const user = await usersDb.remove(id);
    if (!user) {
      res
        .status(400)
        .json({ error: "The used with the specified id does not exist." });
    }
    res.status(200).json({ message: "User was deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "There was an error deleting the user." });
  }
});

module.exports = router;
