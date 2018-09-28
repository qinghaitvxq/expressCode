const express = require('express');
const app = express();

app.use(express.static('public'));

app.post('/post',(req,res)=>{
  console.log(req);
  res.send("test");
});

app.listen(3003);
console.log('Server is listening on port 3003');
