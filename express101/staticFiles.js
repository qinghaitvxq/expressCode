const express = require('express');
const app = express();

// app comes with a use method
// use take 1 arg 
// 1. the middleware you want to run

app.use(express.static('public'));


app.listen(3000);
console.log("Server listening on port 3000....");