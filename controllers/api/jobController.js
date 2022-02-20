const db = require('../models');
const Job = db.job;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
// Validating request
if (!req.body.ClientID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Job
  const job = {
    tech_notes: req.body.tech_notes,
    ClientID: req.body.ClientID
  };
  // Save Job in the database
  Job.create(job)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while creating the Job.",
      });
    });
};

exports.findAll = (req, res) => {
// Finding all Jobs by their clientID
const clientID = req.body.ClientID;
let condition = clientID ? { clientID: { [Op.like]: `%${clientID}%` } } : null;
Client.findAll({ where: condition })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "An error occured while retrieving Jobs.",
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
