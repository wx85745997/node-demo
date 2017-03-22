const http = require("http");
const port = 7073;
http.createServer(function (request, response) {
    response.end("hello")
}).listen(port, function () {
    console.log(`server listen onport ${port}`)
})