module.exports = (app) => {
  const clientController = require("../controllers/clientController");
  const router = require("express").Router();

  // Matches with "/api/client"
  router.post("/", clientController.create);
  router.get("/", clientController.findAll);
  router.delete("/", clientController.remove);

  // Matches with "/api/client/:id"
  router.get("/:id", clientController.findById);
  router.put("/:id", clientController.update);
  router.delete("/:id", clientController.remove);

  app.use("/api/clientController", router);
};
