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
// Finding Job by their ID
const id = req.params.id;
Job.findByPk(id).then((data) => {
  if (data) {
    res.send(data);
  } else {
    res.status(404).send({
      message: `Cannot find Job with id=${id}.`,
    });
  }
  res.status(500).send({
    message: "An error occured when retrieving Job with id=" + id,
  });
});
};

exports.update = (req, res) => {
// Updating Jobs information by using their ID
const id = req.params.id;
Job.update(req.body, {
  where: { id: id },
})
  .then((num) => {
    if (num == 1) {
      res.send({
        message: "Job was updated succesfully.",
      });
    } else {
      res.send({
        message: `Cannot update Job with id=${id}.`,
      });
    }
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "An error occured when updating Job with id=" + id,
    });
  });
};

exports.delete = (req, res) => {
// Finding and deleting Job by their ID
const id = req.params.id;
Job.destroy(
  {
    where: { id: id },
  }
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Job was succesfully deleted!",
        });
      } else {
        res.send({
          message: `Cannot delete Job with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Could not delete Job with id=${id}.`,
      });
    })
);
};

exports.deleteAll = (req, res) => {

};
