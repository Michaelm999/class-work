var http = require('http')
var fs = require('fs')
var toolkit = require('./circle.js')

var server = http.createServer(function(request, response) {
var responseText = 'Hello from localhost:3000!'

if (request.url == '/banana') {
  responseText = 'BOOMSHAKALAKA'
} else if (request.url == '/wdi'){
  responseText = 'is great!'
}
// if (request.url != '/favicon.ico') {
//   var log = request.method + ' ' + request.url + ' ' + Date.now() + '/n'
//   fs.appendFile('./log.txt', log)
// }

 response.write(responseText)
 response.end()
})

server.listen(3000, function() {
  console.log('server running')
})
