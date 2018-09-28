// nodejs is the language
// Express is node, a node module

const path=require('path');
const express = require('express');

const app = express();

// server up static files!
app.use(express.static('public'));

app.all('/',(req,res)=>{
   // express handles the basic headers
   res.send('<h2></h2>say hello by penny.This is the home page by express</h2>');
   // express handles the end !

   // read in Node.html
   //res.sendFile(path.join(__dirname + '/node.html'));

});

app.listen(3001);
console.log('The Server is listening on port 3001...');