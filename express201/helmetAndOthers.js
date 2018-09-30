const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.get('/',(req,res)=>{
//   res.send('hello world');
// });
app.post('/ajax',(req,res)=>{
  console.log("this is inside post func");
  console.log(req);
  res.send("test");
});

app.listen(3003);
console.log('Server is listening on port 3003');
