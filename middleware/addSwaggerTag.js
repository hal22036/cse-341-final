// this middleware function just adds swagger doc comments to auth routes
    const addSwaggerTag = (req, res, next)=>{
        /**
         * #swagger.tags = ["Authorization"]
         */
        next();
    }

// export to be used in index.js
    module.exports = {
        addSwaggerTag
    }