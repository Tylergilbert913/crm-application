const express = require("express");
const session = require('express-session');
const path = require("path");
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware defined here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define and use session object here
const sess = {
  secret: 'Super secret secret',
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


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log('Now listening on http://localhost:' + PORT)
  );
});
