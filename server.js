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

// Support parsing of application/json type post data
app.use(bodyParser.json());

// Support parsing of application/x-www-form-urlencoded post data
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Passport Config
require("./config/passport")(passport);


// Define server port
const PORT = process.env.PORT || 8080;;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


const db = require("./models");
// RUN BELOW CODE TO UPDATE TABLES
//db.sequelize.sync({ force: true });

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
