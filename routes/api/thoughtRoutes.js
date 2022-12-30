// Thought API Routes for api/thoughts/

const router = require("express").Router();

const {
  getAllThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers");
// TODO: Set up controller paths

// ROOT /api/thoughts - GET all thoughts and and POST a new thought
router.route("/")
    .get(getAllThoughts)
    .post(createThought);

// THOUGHTID /api/thoughts/:thoughtId - GET one thoguht, PUT thought updates, DELETE thought
router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

// REACTIONS /api/thoughts/:thoughtId/reactions - POST add reaction to react array
router.route("/:thoughtId/reactions").post(addReaction);

// REACTIONS /api/thoughts/:thoughtId/reactions/:reactionId - DELETE remove one reaction from array
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
