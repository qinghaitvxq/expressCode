
// http is native to NodeJs. We just have to ask for it.
const http = require('http');

// fs = file system module! fs is built into Node.
// fs gives node access to this computer's file system.
const fs = require('fs');

// the http module has a createServer method
// take 1 arg
// 1.callback , callback has 2 args: req,res
const server = http.createServer((req,res)=>{
    console.log('somebody is coming...');
    console.log(req.url);
    if(req.url === '/'){
        // http message
        // 1.start - line   -CHECK
        // 2.header
        // 3.body

        // writeHead takes 2 args
        // 1. status code
        // 2. object for the mime-type
        res.writeHead(200,{'content-type':'text/html'});
        const homePageHTML = fs.readFileSync('node.html');
        //console.log(homePageHTML);
        res.write(homePageHTML);
        res.end();
    }else if(req.url ==='/hope.jpg'){
        res.writeHead(200,{'content-type':'image/jpg'});
        const image= fs.readFileSync('hope.jpg');
        res.write(image);
        res.end();
    }else if(req.url='/node.css'){
        res.writeHead(200,{'content-type':'text/css'});
        const styleFile= fs.readFileSync('node.css');
        res.write(styleFile);
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h4>Sorry,this is not the page you are looking for .</h4>');
        res.end();
    }
   
});

// createServer returns an object with a listen method
// listen takes 1 arg
// 1.port to listen for http traffic on

server.listen(3000);