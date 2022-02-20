const db = require('../models');
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
    EstimateID: req.body.EstimateID
  };
  // Save Client in the database
  Invoice.create(invoice)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while creating the Client.",
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
      message: err.message || "An error occured while retrieving clients.",
    });
  });
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};
