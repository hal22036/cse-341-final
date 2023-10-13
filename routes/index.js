const router = require('express').Router();
const passport = require('passport');
const {addSwaggerTag} = require("../middleware/addSwaggerTag.js")

router.use('/', require('./swagger'));
router.use('/breakfast', require('./breakfast'));
router.use('/lunch', require('./lunch'));
router.use('/dinner', require('./dinner'));
router.use('/dessert', require('./dessert'));
router.use("/shared", require("./shared"));

router.get('/login', passport.authenticate('github'), addSwaggerTag, (req, res) => {});

router.get('/logout', addSwaggerTag, function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;