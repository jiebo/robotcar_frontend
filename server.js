var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    console.log(req.url);
    res.end(); //end the response
}).listen(8080);