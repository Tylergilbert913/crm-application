const Client = require("./Client");
const Estimate = require("./Estimate");
const Invoice = require("./Invoice");
const Job = require("./Job");

Client.hasMany(Job, {
  foreignKey: "ClientID",
});

Job.belongsTo(Estimate, {
  foreignKey: "JobID",
});

Estimate.belongsTo(Invoice, {
  foreignKey: "EstimateID",
});

module.exports = { Client, Estimate, Invoice, Job };
