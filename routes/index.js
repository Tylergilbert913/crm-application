const router = require('express').Router();
const apiRoutes = require('./index1');

router.use('/api', apiRoutes);

module.exports = router;