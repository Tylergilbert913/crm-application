const express = require("express");
// const sequelize = require("./config/connection");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const routes = require("./routes");
// const transporter = require("./config/nodemailer");
const cors = require("cors");


const db = require("./models");
db.sequelize.sync();

const app = express();

let corsOptions = {
  origin: "https://localhost:3000",
};

app.use(cors(corsOptions));

// Define Middleware for use on ALL paths starting with "/" on homepage
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db.sequelize.sync();

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

//add routes
// app.use(routes);

// transporter.verify((err, success) => {
//   err
//     ? console.log(err)
//     : console.log(`=== Server is ready to take messages: ${success}`);
// });




// Start the API Server
// drop the table if it already exists
const PORT = process.env.PORT || 3001;

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`🌎 ===> API Server now listening on PORT ${PORT}!`)
  );
});
