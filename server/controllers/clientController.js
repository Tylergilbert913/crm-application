const db = require("../models");
const Client = db.client;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validating request
  console.log(req.body)
  if (!req.body[0].first_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Client
  const client = {
    first_name: req.body[0].first_name,
    last_name: req.body[0].last_name,
    street_number_name: req.body[0].street_number_name,
    city: req.body[0].city,
    state: req.body[0].state,
    zipcode: req.body[0].zipcode,
    notes: req.body[0].notes,
    email_address: req.body[0].email_address,
    password: req.body[0].password,
  };
  // Save Client in the database
  Client.create(client)
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
  const name = req.query.first_name;
  let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
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
  // Finding Clients by their ID
  const id = req.params.id;
  Client.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Client with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  // Updating Clients information by using their ID
  const id = req.params.id;
  Client.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == num) {
        res.send({
          message: "Client was updated succesfully.",
        });
      } else {
        res.send({
          message: `Cannot update Client with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occured when updating Client with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  // Finding and deleting Client by their ID
  const id = req.params.id;
  Client.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == num) {
        res.send({
          message: "Client was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Client with id=${id}. Maybe Client was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Client with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  // Deleting all Clients
  Client.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Clients were deleted successfully.`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.essage || "An error occured while removiing all Clients.",
      });
    });
};
