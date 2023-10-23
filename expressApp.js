const express = require('express');
const app = express();


// app.post('/dessert', (req, res) => {
//     res.sendStatus(200)
// })

app.listen(3000, ()=> {
    console.log("App is listening on port 3000");
})

module.exports = app;