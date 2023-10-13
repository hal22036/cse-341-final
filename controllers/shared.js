// this middleware function is meant to be at the end of a route
// it take the name of the collection and then grabs one of the 
// collections documents at random which is then sent back to the 
// client if successful
    const getRandom = async (req, res)=>{
        // #swagger.tags= ["Random Meal"]
        const collection = req.params.collection;
                                            res.send(collection);
    }

// export to be used in all routers
    module.exports = getRandom;