module.exports = (app) => {
  const estimateController = require("../controller/estimateController");
  const router = require("express").Router();

  // Matches with "/api/estimate"
  router
    .route("/")
    .get(estimateController.findAll)
    .post(estimateController.create);

  // Matches with "/api/estimate/:id"
  router
    .route("/:id")
    .get(estimateController.findById)
    .put(estimateController.update)
    .delete(estimateController.remove);

  app.use("/api/estimateController", router);
};
