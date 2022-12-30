// Root Index for API Routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', thoughtRoutes);
router.use('/thoughts', userRoutes);

module.exports = router;
