const fs = require('fs')
var a = 'arthur'
console.log(a)
var lyrics = fs.readFileSync('baby.txt')
console.log(lyrics.toString())
a = 'armpit'
console.log(a)
