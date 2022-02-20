const db = require("../models");
const Estimate = db.estimate;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validating request
  if (!req.body.JobID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create an Estimate
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
  Estimate.findByPk(id).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find Estimate with id=${id}.`,
      });
    }
    res.status(500).send({
      message: "An error occured when retrieving Estimate with id=" + id,
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
      if (num == 1) {
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
          err.message || "An error occured when updating Estimate with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  // Finding and deleting Estimate by their ID
  const id = req.params.id;
  Estimate.destroy(
    {
      where: { id: id },
    }
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Estimate was succesfully deleted!",
          });
        } else {
          res.send({
            message: `Cannot delete Estimate with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || `Could not delete Estimate with id=${id}.`,
        });
      })
  );
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
        message: err.essage || "An error occured while removiing all Estimates.",
      });
    });
};
