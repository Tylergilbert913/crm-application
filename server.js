const express = require("express");
// const transporter = require("./config/nodemailer");
const cors = require("cors");
const app = express();
const db = require("./models");

db.sequelize.sync();

let corsOptions = {
  origin: "https://localhost:3000",
};

app.use(cors(corsOptions));

// Define Middleware for use on ALL paths starting with "/" on homepage
// parse request of content-type - application/json
app.use(express.json());
// parse request of content-type - application/x-www-former-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

require("./routes/clientRoutes")(app);
require("./routes/estimateRoutes")(app);
require("./routes/invoiceRoutes")(app);
require("./routes/jobRoutes")(app);

// Start the API Server
// drop the table if it already exists
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🌎 ===> API Server now listening on PORT ${PORT}!`);
});
