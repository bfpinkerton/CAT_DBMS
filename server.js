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
const cors = require("cors");

const app = express();

app.use(express.static('public'));


var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// To allow put and delete methods
app.use(methodOverride("_method"));

// Support parsing of application/x-www-form-urlencoded post data
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Support parsing of application/json type post data
app.use(bodyParser.json());

// for parsing multipart/form-data
// app.use(upload.array()); 
// app.use(express.static('public'));

// Cross browsers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Passport Config
require("./config/passport")(passport);


// Define server port
const PORT = process.env.PORT || 8080;;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


const db = require("./models");
// RUN BELOW CODE TO UPDATE TABLES, Alter allows table column modifications directly from models
// db.sequelize.sync({ alter: true });
// db.sequelize.sync({ force: true });
// db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
// .then(function(){
//     return db.sequelize.sync({ force: true });
// })
// .then(function(){
//     return db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
// })
// .then(function(){
//     console.log('Database synchronised.');
// }, function(err){
//     console.log(err);
// });

// EJS
app.set("view engine", "ejs");

// Express Session
// Time for session to expire
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 10000000}
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

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
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

// Routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var malRouter = require("./routes/mal");
var mmlRouter = require("./routes/mml");
//var associationsRouter = require("./routes/associations");
//var managersRouter = require("./routes/managers");
//var apiRouter = require("./routes/api");
// Pair Routes with subdirectories
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/mal", malRouter);
app.use("/mml", mmlRouter);
//app.use("/associations", associationsRouter);
//app.use("/managers", managersRouter);
//app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  next(createError(500));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});





module.exports = app;
