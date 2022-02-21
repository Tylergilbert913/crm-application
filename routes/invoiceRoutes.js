module.exports = (app) => {
  const invoiceController = require("../controllers/invoiceController");
  const router = require("express").Router();

  // Matches with "/api/invoice"
  router
    .route("/")
    .get(invoiceController.findAll)
    .post(invoiceController.create);

  // Matches with "/api/invoice/:id"
  router
    .route("/:id")
    .get(invoiceController.findById)
    .put(invoiceController.update)
    .delete(invoiceController.remove);

  app.use("/api/invoiceController", router);
};
