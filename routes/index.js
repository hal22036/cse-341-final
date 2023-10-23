const router = require('express').Router();
const passport = require('passport');
const app = require('../expressApp');


router.use('/', require('./swagger'));
router.use('/breakfast', require('./breakfast'));
router.use('/lunch', require('./lunch'));
router.use('/dinner', require('./dinner'));
router.use('/dessert', require('./dessert'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router, app;