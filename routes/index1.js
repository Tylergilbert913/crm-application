const router = require('express').Router();
const clientRoutes = require('./clientRoutes');
const estimateRoutes = require('./estimateRoutes');
const invoiceRoutes = require('./invoiceRoutes');
const jobRoutes = require('./jobRoutes');

router.use('/clients', clientRoutes);
router.use('/invoice', invoiceRoutes);
router.use('/job', jobRoutes);
router.use('/estimate', estimateRoutes);

module.exports = router;