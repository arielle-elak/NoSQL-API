// User Controllers for handling API requests to DB
const { User, Thought } = require("../models");

module.exports = {
  // GET all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // GET a user
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // POST a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // PUT a user
  updateUser(req, res) {
      User.findOneAndUpdate(
          { _id: req.params.userId },
          {
              $set: req.body,
          },
          {
              runValidators: true,
              new: true,
          }
      ).then((dbUserData) => {
          if (!dbUserData) {
              return res
                  .status(404)
                  .json({ message: `Sorry, no user with that ID was found.` });
          }
          res.json(dbUserData);
      })
          .catch((err) => {
              console.log(err);
              res.status(500).json(err);
          });
  },
};
