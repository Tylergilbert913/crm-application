module.exports = (app) => {
  const clientController = require("../controllers/clientController.js");
  const router = require("express").Router();

  // Matches with "/api/client"
  router.post("/", clientController.create);
  router.get("/", clientController.findAll);
  router.delete("/", clientController.deleteAll);

  // Matches with "/api/client/:id"
  router.get("/:id", clientController.findOne);
  router.put("/:id", clientController.update);
  router.delete("/:id", clientController.delete);

  app.use('/api/client', router);
};
