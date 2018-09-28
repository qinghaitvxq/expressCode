const express = require('express');
const app = express();

// Express = 2 things
// 1.Router
// 2.Middleware that comprises a webfraework
//  Req ---- middleware ---Res
// Middleware function is ANY function that has access to the Req, Res, next object.

function validateUser(req,res,next){
     console.log("check locals first");
     console.log(res.locals);
     res.locals.validated=true;
     next();
}

// app.use and app.get are exactly the same thing!
// the only difference is that app.use does not distinguish
// between GET/POST/PUT or any of that stuff
// and we don't have to specify a path
// app.get looks like the router but it's really just a way of writing middleware
// wow...

// this will run validateUser on all path, all methods!
app.use(validateUser);

// this will run validateUser on /admin,all methods!
app.use('/admin',validateUser);

// this will run validateUser on /, only get methods! And ,by the way,it looks like what next to it...
app.get('/',validateUser);
app.get('/',(req,res,next)=>{
    res.send('<h2>hello ,this is main page</h2>');
    console.log("checkout locals now");
    console.log(res.locals);
});

app.listen(3002);
console.log("Server is listening on port 3002");