// Thought API Routes for api/thoughts/

const router = require("express").Router();

const {
  getAllThoughts,
  getOneThought,
  createThought,
  deleteThought,
} = require("../../controllers");
// TODO: Set up controller paths

// ROOT /api/thoughts - GET all thoughts and and POST a new thought
router.route('/')
    .get(getAllThoughts)
    .post(createThought);


