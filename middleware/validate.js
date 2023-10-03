const validator = require('../helpers/validate');

const saveBreakfast = (req, res, next) => {
    const validationRule = {
        faculty_id: 'required|string',
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|string',
        subject: 'required|string',
        yearsTeaching: 'required|string'        
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err  
            });
        } else {
            next();
        }
    });
};

const saveLunch = (req, res, next) => {
    const validationRule = {
        faculty_id: 'required|string',
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|string',
        subject: 'required|string',
        yearsTeaching: 'required|string'        
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err  
            });
        } else {
            next();
        }
    });
};

const saveDinner = (req, res, next) => {
    const validationRule = {
        faculty_id: 'required|string',
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|string',
        subject: 'required|string',
        yearsTeaching: 'required|string'        
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err  
            });
        } else {
            next();
        }
    });
};

const saveDessert = (req, res, next) => {
    const validationRule = {
        faculty_id: 'required|string',
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|string',
        subject: 'required|string',
        yearsTeaching: 'required|string'        
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err  
            });
        } else {
            next();
        }
    });
};


module.exports = {
    saveBreakfast,
    saveLunch,
    saveDinner,
    saveDessert
};