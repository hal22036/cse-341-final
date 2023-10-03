const validator = require('../helpers/validate');

const saveBreakfast = (req, res, next) => {
    const validationRule = {
        breakfast_type: 'required|string',
        item_1: 'required|string',
        item_2: 'required|string',
        item_3: 'required|string',
        item_4: 'required|string',
        category: 'required|string'        
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
        lunch_type: 'required|string',
        item_1: 'required|string',
        item_2: 'required|string',
        item_3: 'required|string',
        item_4: 'required|string',
        category: 'required|string'         
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
        dinner_type: 'required|string',
        item_1: 'required|string',
        item_2: 'required|string',
        item_3: 'required|string',
        item_4: 'required|string',
        category: 'required|string'         
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
        dessert_type: 'required|string',
        item_1: 'required|string',
        item_2: 'required|string',
        item_3: 'required|string',
        item_4: 'required|string',
        item_5: 'required|string',
        item_6: 'required|string',
        category: 'required|string'         
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