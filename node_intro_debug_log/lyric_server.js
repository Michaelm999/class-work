const fs = require('fs')
const http = require('http')

function requestHandler(req, res) {
    res.end('hi')
}
var myServer = http.createServer(requestHandler)

myServer.listen(3000, function() {
  console.log('Server started')
})
