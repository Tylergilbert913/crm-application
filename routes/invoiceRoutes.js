const router = require('express').Router();
const invoiceController = require("../../invoiceController");
// const withAuth = require('../../utils/auth');

// Matches with "/api/invoice" 
router.route("/")
.get(invoiceController.findAll)
.post(invoiceController.create)

// Matches with "/api/invoice/:id"
router
.route("/:id")
.get(invoiceController.findById)
.put(invoiceController.update)
.delete(invoiceController.remove);

module.exports = router;