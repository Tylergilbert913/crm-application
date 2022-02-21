module.exports = (app) => {
  const jobController = require("../controllers/jobController");
  const router = require("express").Router();

  // Matches with "/api/job"

  router.get("/", jobController.findAll);
  router.post("/", jobController.create);
  router.delete("/", jobController.deleteAll);

  // Matches with "/api/job/:id"

  router.get("/:id", jobController.findById);
  router.put("/:id", jobController.update);
  router.delete("/:id", jobController.delete);

  app.use("/api/jobController", router);
};
