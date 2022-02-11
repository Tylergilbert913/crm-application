const router = require('express').Router();
const estimateController = require("../../estimateController");
// const withAuth = require('../../utils/auth');


// Matches with "/api/estimate" 
router.route("/")
.get(estimateController.findAll)
.post(estimateController.create)

// Matches with "/api/estimate/:id"
router
.route("/:id")
.get(estimateController.findById)
.put(estimateController.update)
.delete(estimateController.remove);

module.exports = router;