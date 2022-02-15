// const sql = require("mssql");
// require("dotenv").config();

// const sqlConfig = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PWD,
//   database: process.env.DB_NAME,
//   server: "crmtexas.database.windows.net",
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
//   options: {
//     encrypt: true,
//     trustServerCertificate: false,
//   },
// };

// async () => {
//   try {
//     // make sure that any items are correctly URL encoded in the connection string
//     await sql.connect(sqlConfig);
//     const result = await sql.query`select * from mytable where id = ${value}`;
//     console.dir(result);
//   } catch (err) {
//     // ... error checks
//   }
// };

// module.exports = sqlConfig;