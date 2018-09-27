// nodejs is the language
// Express is node, a node module

const express = require('express');

const app = express();

app.all('*',(req,res)=>{
   // express handles the basic headers
   res.send('<h1>This is the home page by express</h1>');
   // express handles the end !
});

app.listen(3001);
console.log('The Server is listening on port 3000...');