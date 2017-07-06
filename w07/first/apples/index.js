const express = require('express')
const app = express()
const PORT = 3000

var apples = []

app.get('/', function(req, res) {
  res.send('Welcome to the apples app. We have '+apples.length+' apples today')
})

app.get('/apples', function(req, res) {
  res.send(apples)
})

app.post('/apples', function(req, res) {
  apples.push('apple')
  res.send('Heres an apple for you')
})

app.delete('/apples', function(req, res) {
  apples.pop()
  res.send('one apple is gone')
})



app.listen(PORT, function(){
  console.log('server started')
})
