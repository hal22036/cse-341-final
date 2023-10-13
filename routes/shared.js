// 3p imports 
    const express = require("express");

// custom imports
    const getRandom = require("../controllers/shared.js");

// create shared router
    const shared = express.Router();
// get random route
    shared.get("/random/:collection", getRandom);

// export router to mount in index.js
    module.exports = shared;
