const express = require('express');
const app = express();

// app object has a few methods:
// HTTP verbs! REST verbs!
// get post delete update

// take 2 args
// 1.path
// 2.callback to run if an HTTP request that matchs this verb
// is made to the path in #1


app.get('/',(req,res)=>{
    console.log(req);
    res.send('<h1>hello this is routing get.from express');
});
app.post('/',(req,res)=>{
    console.log(req);
    res.send('<h1>hello this is routing post.from express');
});
// app.delete()
// app.put()

app.listen(3002);
console.log('The server is listening on port 3002...');