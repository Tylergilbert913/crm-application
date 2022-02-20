const db = require("../models");
const Estimate = db.estimate;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validating request
  if (!req.body.schedule_date) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Client
  const client = {
    schedule_date: req.body.schedule_date,
    schedule_date_start: req.body.schedule_date_start,
    schedule_date_end: req.body.schedule_date_end,
    description: req.body.description,
    labor_cost: req.body.labor_cost,
    material_cost: req.body.material_cost,
    material_type: req.body.material_type,
    material_quanity: req.body.material_quanity,
    discount: req.body.discount,
    subtotal: req.body.subtotal,
    total: req.body.total,
    JobID: req.body.JobID,
  };
  // Save Client in the database
  Client.create(client)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "An error occured while creating the Client.",
      });
    });
};

exports.findAll = (req, res) => {};

exports.findOne = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};
