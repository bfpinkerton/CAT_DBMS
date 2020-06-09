const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Additionals:
const session = require('express-session');
const passport = require('passport');
const sassMiddleware = require('node-sass-middleware');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const methodOverride = require('method-override');
var mysql = require('mysql');
const Sequelize = require('sequelize');
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// To allow put and delete methods
app.use(methodOverride("_method"));

// Support parsing of application/json type post data
app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Passport Config
// require("./config/passport")(passport);


// Define server port
const PORT = process.env.PORT || 8080;;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// DB Config & conncection point
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'admin123',
//   database : 'my_db'
// });
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });

// // Option 1: Passing parameters separately
// const sequelize = new Sequelize('my_db', 'root', 'admin123', {
//   host: 'localhost',
//   dialect: 'mssql',
//   port: 3000
// });
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

const db = require("./models");
db.sequelize.sync();


// EJS
app.set("view engine", "ejs");

// Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Support for flash messages
app.use(flash());
app.use(function (req, res, next) {
  res.locals.success = req.flash("success");
  res.locals.check = req.flash("check");
  res.locals.failure = req.flash("failure");
  res.locals.error = req.flash("error");
  next();
});

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");
//var associationsRouter = require("./routes/associations");
//var managersRouter = require("./routes/managers");
//var apiRouter = require("./routes/api");
// Pair Routes with subdirectories
app.use("/", indexRouter);

//app.use("/users", usersRouter);
//app.use("/associations", associationsRouter);
//app.use("/managers", managersRouter);
//app.use("/api", apiRouter);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true,
  })
);
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
