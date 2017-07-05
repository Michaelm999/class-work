var fs = require('fs')
console.log('Welcome to the poem writer program')
var poemStr = 'Lemons are green'
console.log(poemStr)
fs.writeFile('poem.txt', poemStr, function(err){
  if (err) {console.log(err)}
  else {console.log('inside of writeFile poemStr is', poemStr)}
  })
console.log('Finished Writing Poem')
poemStr = 'a night with stars'
console.log(poemStr)
