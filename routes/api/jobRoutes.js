const router = require('express').Router();
const jobController = require("../../jobController");
const withAuth = require('../../utils/auth');

// Matches with "/api/job" 
router.route("/")
.get(jobController.findAll)
.post(jobController.create)

// Matches with "/api/job/:id"
router
.route("/:id")
.get(jobController.findById)
.put(jobController.update)
.delete(jobController.remove);

module.exports = router;