const db = require("../models");
const Client = db.client;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validating request
  if (!req.body.first_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Client
  const client = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    street_number_name: req.body.street_number_name,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    notes: req.body.notes,
    email_address: req.body.email_address,
    password: req.body.password,
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

exports.findAll = (req, res) => {
    const name = req.query.first_name;
    let condition = name ? { name: { [Op.like]: `%${name}%`} } : null;
    Client.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error occured while retrieving clients."
        })
    })
};

exports.findOne = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};
