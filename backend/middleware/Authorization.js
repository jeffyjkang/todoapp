// import jwt from jsonwebtoken
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET || "superSecret";

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    email: user.email
  };
  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secret, options);
}

function authorize(req, res, next) {
  // console.log(req.headers.authorization);
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        return res.status(401).json({ error: "token is invalid" });
      }
      req.decodedToken = decodedToken;
      next();
    });
  } else {
    res.status(401).json({ error: "token was not provided" });
  }
}

module.exports = { generateToken, authorize };
