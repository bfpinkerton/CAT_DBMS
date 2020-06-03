var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Additionals:
var session = require('express-session');
var passport = require('passport');
var sassMiddleware = require('node-sass-middleware');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

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

// TODO: DB Config & conncection point



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


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var associationsRouter = require("./routes/associations");
var managersRouter = require("./routes/managers");
var apiRouter = require("./routes/api");
// Pair Routes with subdirectories
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/associations", associationsRouter);
app.use("/managers", managersRouter);
app.use("/api", apiRouter);

// Define server port
const PORT = process.env.PORT;
// USING `
app.listen(PORT, console.log(`Server started on port ${PORT}`));

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
