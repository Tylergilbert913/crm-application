module.exports = (app) => {
  const invoiceController = require("../controllers/invoiceController.js");
  const router = require("express").Router();

  // Matches with "/api/invoice"

  router.get("/", invoiceController.findAll);
  router.post("/", invoiceController.create);
  router.delete("/", invoiceController.delete);

  // Matches with "/api/invoice/:id"

  router.get("/:id", invoiceController.findOne);
  router.put("/:id", invoiceController.update);
  router.delete("/:id", invoiceController.delete);

  app.use("/api/invoice", router);
};
