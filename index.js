var server = require("./web.js");
var router = require("./router.js");

server.start(router.route);
 