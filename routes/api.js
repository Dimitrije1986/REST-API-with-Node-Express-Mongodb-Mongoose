const express = require("express");
const router = express.Router();
const User = require("../models/user");

// get a list of users from the db
router.get("/users", function (req, res, next) {
 User.find({}).then(users => res.send(users))
});

// add a new user to the db
router.post("/users", function (req, res, next) {
  User.create(req.body)
    .then(function (user) {
      res.send(user);
    })
    .catch(next);
});

// update a user in the db
router.put("/users/:id", function (req, res, next) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    User.findOne({ _id: req.params.id }).then((user) => res.send(user));
  });
});

// delete user from the db
router.delete("/users/:id", function (req, res, next) {
  User.findByIdAndDelete({ _id: req.params.id }).then((user) => res.send(user));
});

module.exports = router;
