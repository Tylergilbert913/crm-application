const express = require("express");
const session = require("express-session");
// const path = require("path");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./routes");
const transporter = require("./config/nodemailer");

const PORT = process.env.PORT || 3001;
const app = express();

// Define Middleware for use on ALL paths starting with "/" on homepage
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define and use session object here
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//add routes
app.use(routes);

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success}`);
});



// Start the API Server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`🌎 ===> API Server now listening on PORT ${PORT}!`)
  );
});


