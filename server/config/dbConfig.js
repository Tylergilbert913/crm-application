// const sql = require("mssql");

module.exports = {
  HOST: "crmtexas.database.windows.net",
  PORT: 1433,
  USER: "bradtyler",
  PASSWORD: "jeepjetta1!",
  DB: "Crm_db",
  dialect: "mssql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// server name used for MSSQL database
// server: "crmtexas.database.windows.net",
// password: jeepjetta1!
// user: bradytyler
