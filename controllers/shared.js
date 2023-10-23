// 3p imports
const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

// this middleware function is meant to be at the end of a route
// it take the name of the collection and then grabs one of the 
// collections documents at random which is then sent back to the 
// client if successful
    const getRandom = async (req, res)=>{
        // #swagger.tags= ["Random Meal"]
        const collection = req.params.collection;

        try{const result = await mongodb.getDatabase().db().collection(collection).find();
            result.toArray().then((collect, err) => {
            try {
                if(collect.length === 0){
                    res.status(400).send("The collection is either empty or does not exist");
                    return;
                }
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(collect[Math.floor(Math.random() * collect.length)]);
            } catch (err) {
                res.status(400).json({ message: err });
            }
        });
        }catch(error){
            res.status(400).send(`${collection} either is empty or does not exist`);
        }
    }

// export to be used in all routers
    module.exports = getRandom;