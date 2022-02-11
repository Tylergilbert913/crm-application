const router = require('express').Router();
const clientController = require("../../clientController");
// const withAuth = require('../../utils/auth');


// Matches with "/api/client" 
router.route("/")
.get(clientController.findAll)
.post(clientController.create)

// Matches with "/api/client/:id"
router
.route("/:id")
.get(clientController.findById)
.put(clientController.update)
.delete(clientController.remove);

module.exports = router;