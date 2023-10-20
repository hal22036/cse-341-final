const mongodb = require('./data/database');
const {app} = require("./app.js");

const port = process.env.PORT || 3000;

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => { console.log(`Database is listening and node is running on port ${port}`)});
    }
});

