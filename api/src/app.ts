var createError = require("http-errors");
var express = require("express");
var path = require("path");

var indexRouter = require("./build/routes/index");
var testAPIRouter = require("./build/routes/testYAPI");

var app = express();
var port = 12000;


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/testAPI", testAPIRouter);

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App is running on port ${port}`);
});