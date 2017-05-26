
// var http = require("http");

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("./AOP01.html");
//   response.end();
// }).listen(8888);

// function say(word) {
//   console.log(word);
// }

// function execute(someFunction, value) {
//   someFunction(value);
// }

// execute(say, "你丫谁");


// function bi(bi){
// 	console.log(bi);
// }
// function co(bibi,cc){
// 	bibi(cc)
// }

// co(bi,"0000");



// function execute(someFunction, value) {
//   someFunction(value);
// }

// execute(function(word){ console.log(word) }, "Hello");


// var http = require("http");
// function start(){
// function onRequest(request, response) {
//   console.log("Request received.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }

// http.createServer(onRequest).listen(8888);

// console.log("Server has started.");
// }

// exports.start = start;


// var http = require("http");
// var url = require("url");

// function start() {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// exports.start = start;


var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;