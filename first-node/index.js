var http = require('http')
var toolkit = require('./circle.js')
var server = http.createServer(function(request, response) {
var responseText = 'Hello from localhost:3000!'

if (request.url == '/banana') {
  responseText = 'BOOMSHAKALAKA'
} else if (request.url == '/wdi'){
  responseText = 'is great!'
}
 response.write(responseText)
 response.end()
})

server.listen(3000, function() {
  console.log('server running')
})
