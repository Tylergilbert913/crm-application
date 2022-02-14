module.exports = {
  HOST: "localhost",
  PORT: "3001",
  USER: "bradytyler",
  PASSWORD: "jeepjetta1!",
  DB: "crm_db",
  dialect: "mssql",
  pool: {
    max: 10, 
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
