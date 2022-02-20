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
  const id = req.params.id;
  Client.findByPk(id).then((data) => {
    res.status(500).send({
      message: "An error occured when retrieving Client with id=" + id,
    });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Client.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
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
  const id = req.params.id;
  Client.destroy(
    {
      where: { id: id },
    }
      .then((num) => {
        where: {
          id: id;
        }
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Client was succesfully deleted!",
          });
        } else {
          res.send({
            message: `Cannot delete Client with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Could not delete Client with id=${id}.`,
        });
      })
  );
};

exports.deleteAll = (req, res) => {
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
