module.exports = (app) => {
  const jobController = require("../controllers/jobController");
  const router = require("express").Router();

  // Matches with "/api/job"
    router
    .route("/")
    .get(jobController.findAll)
    .post(jobController.create);

  // Matches with "/api/job/:id"
  router
    .route("/:id")
    .get(jobController.findById)
    .put(jobController.update)
    .delete(jobController.remove);

    app.use("/api/jobController", router);
};
