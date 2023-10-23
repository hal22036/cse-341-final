const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');


app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }))
 .use(bodyParser.json())
 .use(session({
    secret: "secret", //uses a cookie. In production, should use a random number.
    resave: false,
    saveUninitialized: true,
 }))
 //This is the basic express session({...}) initialization.
 .use(passport.initialize())
 //init passport on every route call.
 .use(passport.session())
 //allow passport to use "express-session".
 .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-AllowHeaders',
        'Origin, X-Rquested-With, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
    })   
 .use('/', require('./routes/index.js'));

//  passport.use(new GitHubStrategy({
//     clientID: process.env.GITHUB_CLIENT_ID,
//     clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     callbackURL: process.env.CALLBACK_URL
//  },
//  function(accessToken, refreshToken, profile, done) {
//     //User.findOrCreate({ githubId: profile.id }, function (err, user) {
//         return done(null, profile);
//         //});
//     }
// ));

// passport.serializeUser((user, done) => {
//     done(null, user);
// });
// passport.deserializeUser((user, done) => {
//     done(null, user);
// });

// app.get('/', (req,res) => { res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.dislayName}` : "Logged Out")});

// app.get('/github/callback', passport.authenticate('github', {
//     failureRedirect: '/api-docs', session: false}),
//     (req, res) => {
//         req.session.user = req.user;
//         res.redirect('/');
//     });


   module.exports = {app};