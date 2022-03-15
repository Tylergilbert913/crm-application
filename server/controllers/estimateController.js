const db = require("../models");
const Estimate = db.estimate;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log(req.body);

  // Validating request
  if (!req.body[0].JobID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create an Estimate
  const estimate = {
    schedule_date: req.body[0].schedule_date,
    schedule_date_start: req.body[0].schedule_date_start,
    schedule_date_end: req.body[0].schedule_date_end,
    description: req.body[0].description,
    labor_cost: req.body[0].labor_cost,
    material_cost: req.body[0].material_cost,
    material_type: req.body[0].material_type,
    material_quanity: req.body[0].material_quanity,
    discount: req.body[0].discount,
    subtotal: req.body[0].subtotal,
    total: req.body[0].total,
    JobID: req.body[0].JobID,
  };
  // Save Estimate in the database
  Estimate.create(estimate)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while creating the Estimate.",
      });
    });
};

exports.findAll = (req, res) => {
  // Finding all Estimates by their JobID
  const jobID = req.query.JobID;
  let condition = jobID ? { jobID: { [Op.like]: `%${jobID}%` } } : null;
  Estimate.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while retrieving Estimates.",
      });
    });
};

exports.findOne = (req, res) => {
  // Finding Estimate by their ID
  const id = req.params.id;
  Estimate.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Estimate with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  // Updating Estimate information by using their ID
  const id = req.params.id;
  Estimate.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == num) {
        res.send({
          message: "Estimate was updated succesfully.",
        });
      } else {
        res.send({
          message: `Cannot update Estimate with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "An error occured when updating Estimate with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  // Finding and deleting Estimate by their ID
  const id = req.params.id;
  Estimate.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == num) {
        res.send({
          message: "Estimate was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Estimate with id=${id}. Maybe Estimate was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete Estimate with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  // Deleting all Estimates
  Estimate.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Estimates were deleted successfully.`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.essage || "An error occured while removiing all Estimates.",
      });
    });
};
