const express = require('express')
const app = express()
const PORT = 3000

var myBike = undefined
var bunchOfOranges = ['orange', 'orange']
bunchOfOranges.push('orange')

app.get('/naranjas', function(req, res) {
  res.send(bunchOfOranges)
})

app.get('/', function(req, res){
  console.log('request to root')
  res.send('Hello World')
})

app.get('/despacito', function(req, res) {
  res.send('You want the despacito song')
})

app.get('/yellow', function(req, res) {
  res.send('You want that yellow song')
})

app.get('/bike', function(req, res){
  if (myBike == undefined) {
    res.send('The bike is not defined yet')
  } else {
    res.send('Bike Details: Type: '+ myBike.type + ', color is ' + myBike.color)
  }
})

app.post('/bike', function(req, res) {
  myBike = {type: 'BMX (knock off)', color: 'blue'}
  res.send('I will add this bike')
})

app.delete('/bike', function(req, res) {
  myBike = undefined
  res.send('The bike has been destroyed')
})

app.listen(PORT, function(){
  console.log('server started in port', PORT)
})
