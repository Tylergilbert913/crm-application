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
  const estimate = {
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
  Estimate.create(estimate)
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
  const date = req.query.schedule_date;
  let condition = date ? { date: { [Op.like]: `%${date}%` } } : null;
  Estimate.findAll({ where: condition })
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
  Estimate.findByPk(id).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find CLient with id=${id}.`,
      });
    }
    res.status(500).send({
      message: "An error occured when retrieving Client with id=" + id,
    });
  });
};

exports.update = (req, res) => {
  // Updating Clients information by using their ID
  const id = req.params.id;
  Estimate.update(req.body, {
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
  // Finding and deleting Client by their ID
  const id = req.params.id;
  Estimate.destroy(
    {
      where: { id: id },
    }
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
          message: err.message || `Could not delete Client with id=${id}.`,
        });
      })
  );
};

exports.deleteAll = (req, res) => {
  // Deleting all Clients
  Estimate.destroy({
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
