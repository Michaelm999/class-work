var fs = require('fs')
console.log('Welcome to the poem writer program')
var poemStr = 'Motorcycles are like flowers.'
console.log(poemStr)
fs.writeFileSync('poem.txt', poemStr)
console.log('done writing program')
poemStr = 'Its a beautiful morning'
console.log(poemStr)
