const express = require('express');

const locationRouter = require('./location');
const videoRouter = require('./video');
const router = express.Router();
router.use('/location',locationRouter);
router.use('/video',videoRouter);
module.exports = router;