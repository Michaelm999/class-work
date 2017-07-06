const fs = require('fs')
const http = require('http')

function lyrics(song, res) {
  res.end(fs.readFileSync(song).toString())
}

// var data = fs.readFileSync('baby.txt')
// var lyrics = fs.readFileSync('yellow.txt')
// var espana = fs.readFileSync('despacio.txt')

function requestHandler(req, res) {
  if (req.url == '/baby') {
  lyrics('baby.txt', res)
} else if (req.url == '/yellow') {
lyrics('yellow.txt', res)
} else if (req.url == '/despacio'){
  lyrics('despacio.txt', res)
}
else {
  res.end('Hi '+req.url)
  }
}
var myServer = http.createServer(requestHandler)

myServer.listen(3000, function() {
  console.log('Server started')
})
