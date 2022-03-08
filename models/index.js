const dbConfig = require("../config/dbConfig.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.client = require("./Client.js")(sequelize, Sequelize);
db.estimate = require("./Estimate.js")(sequelize, Sequelize);
db.invoice = require("./Invoice.js")(sequelize, Sequelize);
db.job = require("./Job.js")(sequelize, Sequelize);

module.exports = db;
