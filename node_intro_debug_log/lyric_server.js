const fs = require('fs')
const http = require('http')

var data = fs.readFileSync('baby.txt')
var lyrics = fs.readFileSync('yellow.txt')
var espana = fs.readFileSync('despacio.txt')

function requestHandler(req, res) {
  if (req.url == '/baby') {
  res.end(data.toString())
} else if (req.url == '/yellow') {
res.end(lyrics.toString())
} else if (req.url == '/despacio'){
  res.end(espana.toString())
}
else {
  res.end('Hi '+req.url)
  }
}
var myServer = http.createServer(requestHandler)

myServer.listen(3000, function() {
  console.log('Server started')
})
