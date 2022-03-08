module.exports = (app) => {
  const estimateController = require("../controllers/estimateController.js");
  const router = require("express").Router();

  // Matches with "/api/estimate"
  router.get("/", estimateController.findAll);
  router.post("/", estimateController.create);
  router.delete("/", estimateController.deleteAll);

  // Matches with "/api/estimate/:id"

  router.get("/:id", estimateController.findOne);
  router.put("/:id", estimateController.update);
  router.delete("/:id", estimateController.delete);

  app.use("/api/estimate", router);
};
