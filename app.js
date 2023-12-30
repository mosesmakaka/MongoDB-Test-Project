const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    flash = require("connect-flash"),
    seedDB = require("./seeds"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    methodOverride = require("method-override"),
    User = require("./models/user");


const indexRoutes = require("./routes/index"),
    campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes = require("./routes/comments");

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://moses:moses@cluster101.6utvxdo.mongodb.net/MyDatabase1", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(methodOverride("_method"));
app.use(flash());

// seedDB();  //to seed the DB

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Moses hataki mchezo",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(PORT, IP, function () {
    console.log("Server imefunguliwa " + IP + ":" + PORT);
});
