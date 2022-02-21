module.exports = (app) => {
  const clientController = require("../controllers/clientController");
  const router = require("express").Router();

  // Matches with "/api/client"
  router
  .route("/")
  .get(clientController.findAll)
  .post(clientController.create);

  // Matches with "/api/client/:id"
  router
    .route("/:id")
    .get(clientController.findById)
    .put(clientController.update)
    .delete(clientController.remove);

  app.use("/api/clientController", router);
};
