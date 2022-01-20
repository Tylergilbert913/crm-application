const Client = require("./Client");
const Estimate = require("./Estimate");
const Invoice = require("./Invoice");
const Job = require("./Job");

Client.hasMany(Job, {
  foreignKey: "client_id",
  onDelete: "CASCADE"
});

Job.belongsTo(Client, {
  foreignKey: "job_id",
});

Job.belongsTo(Estimate, {
  foreignKey: "job_id",
});

Estimate.belongsTo(Invoice, {
  foreignKey: "estimate_id",
});

module.exports = { Client, Estimate, Invoice, Job };
