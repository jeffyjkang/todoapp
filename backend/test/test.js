const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const request = require("supertest");
const { server } = require("../server");
chai.use(chaiHttp);

// var assert = require("assert");
// describe("Array", function() {
//   describe("#indexOf()", function() {
//     it("should return -1 when the value is not present", function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

// const userCredentials = {
//   username: "testUser",
//   password: "testPassword",
//   email: "testEmail@email.com"
// };

// const login_details = {
//     username: "testUser",
//     password: "testPassword",
//   };

//   const register_details = {
//       username: "testUser1",
//       email: "testEmail1",
//       password: "testPassword1"
//   }

// const authenticatedUser = request.agent(server);
// before(function(done) {
//   authenticatedUser
//     .post("/users/login")
//     .send(userCredentials)
//     .end(function(err, response) {
//       expect(response.status).to.equal(200);
//       done();
//     });
// });

// //server.js
// describe("server.js", function() {
//   // root endpoint
//   describe("root endpoint (/)", function() {
//     it("should return server running in h1 tag", function(done) {
//       chai
//         .request(server)
//         .get("/")
//         .end(function(err, res) {
//           const expected = "<h1>Server Running<h1>";
//           res.body.should.be.a("object");
//           expect(res.text).to.equal(expected);
//           done();
//         });
//     });
//   });
//   // user endpoint
// });
// describe("get user by id", function() {
//   it("should return a 200", function(done) {
//     const params = {
//       headers: {
//         username: "testUser",
//         password: "pass",
//         email: "testEmail@email.com"
//       }
//     };
//     chai
//       .request(server)
//       .get("/users/forgotpw")
//       .send(params)
//       .end(function(err, res) {
//         console.log(res);
//         done();
//       });
//   });
// });

// server.js
// describe("server.js", () => {
//   // root endpoint **
//   describe("root endpoint (/)", () => {
//     it("should return return server running in h1 tag", async () => {
//       const expected = "<h1>Server Running<h1>";
//       const res = await request(server).get("/");
//       res.body.should.be.a("object");
//       expect(res.text).to.equal(expected);
//     });
//   });
//   // users endpont **
//   describe("users endpoint (/users)", () => {
// test for user registration
// it("regester end point should return status 201, and token string", async () => {
//   const res = await chai
//     .request(server)
//     .post("/users/register")
//     .send({
//       username: "testUser",
//       password: "testPassword",
//       email: "testEmail@email.com"
//     });
//   console.log(res);
//   res.should.have.status(201);
//   res.should.be.json;
//   res.body.should.be.a("string");
//   // if test is run a second time, res.should.have.status will be 200
//   // res.body will be an object with errno, code
// });
// test for user login
// it("login end point should return status 201, and token string", async () => {
//   const user = { username: "testUser", password: "testPassword" };
//   const authenticatedUser = await chai.request.agent(server);
//   const res = authenticatedUser.post("/users/login").send(user);
//   //   console.log(res.body);
//   //   token = res.body;
//   console.log(res);
//   //   authenticatedUser.should.have.status(201);
//   //   authenticatedUser.should.be.json;
//   //   authenticatedUser.body.should.be.a("string");
// });
// it("login end point", function(done) {
//   const user = { username: "testUser", password: "testPassword" };
//   const authenticatedUser = request.agent(server);
//   before(function(done) {
//     authenticatedUser
//       .post("/users/login")
//       .send(user)
//       .end(function(err, response) {
//         expect(response.status).to.equal(201);
//         expect(response.body).to.be("object");
//         console.log(response.body);
//         done();
//       });
//   });
//   done();
// });
// test for put by id
// it("put end point should return status 200, and generate another token", async () => {
//   const body = { password: "testPassword" };
//   console.log(token);
//   const params = { headers: { authorization: token } };
//   const res = await chai
//     .request(server)
//     .put("/users/24")
//     .send(body, params);
//   res.should.have.status(200);
//   res.should.be.json;
//   res.body.should.be.a("string");
// });
//   });
// });
// console.log(token);

// it("should do something with users", function(done) {
//   chai
//     .request(server)
//     .post("/users/register")
//     .send({
//       username: "usernametest",
//       password: "passwordtest",
//       email: "emailtest"
//     })
//     .end(function(err, res) {
//       res.should.have.status(201);
//     });
//   done();
// });
