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

// another structured feature to fetch data with query

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize(
//   process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//     dialect: 'mssql',
//     host: process.env.DB_HOST, //This is an IP ADRESS
//     dialectOptions: {
//       options: {
//         instanceName: process.env.DB_INSTANCE_NAME,
//         trustServerCertificate: true
//       },
//     }
//   }
// );
// module.exports = {
//   sequelize,
//   Sequelize
// };