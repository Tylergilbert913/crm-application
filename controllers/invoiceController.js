const db = require("../models");
const Invoice = db.invoice;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validating request
  if (!req.body.invoice_total) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Client
  const invoice = {
    invoice_total: req.body.invoice_total,
    EstimateID: req.body.EstimateID,
  };
  // Save Client in the database
  Invoice.create(invoice)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while creating the Invoice.",
      });
    });
};

exports.findAll = (req, res) => {
  // Finding all Client by their first names
  const total = req.query.invoice_total;
  let condition = total ? { total: { [Op.like]: `%${total}%` } } : null;
  Client.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while retrieving cInvoice.",
      });
    });
};

exports.findOne = (req, res) => {
  // Finding Clients by their ID
  const id = req.params.id;
  Invoice.findByPk(id)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Error retrieving Invoice with id=" + id,
    });
  });
};

exports.update = (req, res) => {
  // Updating Clients information by using their ID
  const id = req.params.id;
  Invoice.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Invoice was updated succesfully.",
        });
      } else {
        res.send({
          message: `Cannot update Invoice with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occured when updating Invoice with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
    // Finding and deleting Client by their ID
  const id = req.params.id;
  Invoice.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Invoice was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Invoice with id=${id}. Maybe Invoice was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete Invoice with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
    // Deleting all Clients
  Invoice.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Invoices were deleted successfully.`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.essage || "An error occured while removiing all Invoices.",
      });
    });
};
