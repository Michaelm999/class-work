const fs = require('fs')
var a = 'arthur'
fs.readFile('baby.txt', function(err, data){
  if (err) {
    console.log(err)
  }
  console.log(a)
  console.log(data.toString())
})
a = 'armpit'
console.log(a)
