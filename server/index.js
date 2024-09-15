const express = require("express");
const app = express();


// Response in server
app.get('/', (req, res) => {
    res.send('Hello Wordl');
});


// Start the server
app.listen(3002, () => {
    console.log("Server is running in 3002 port");
});