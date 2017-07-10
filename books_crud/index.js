const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

//connect to mongodb database
const DB_URL = 'mongodb://localhost/books_crud_app'

mongoose.connect(DB_URL, function(err) {
  if (err) {
    console.error(err)
  } else {
    console.log('Successfully connected to ', DB_URL)
  }
})

//create schema and model
var bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  genre: String,
  isbn: Number
})

const Book = mongoose.model('Book', bookSchema)

// Create a test book
Book.create({
  name: 'Hamlet',
  author: 'Shakespeare',
  genre: 'drama',
  isbn: 667
})

app.get('/books', function(req,res) {
  Book.find({}, function(err, allThemBooks) {
    res.send(allThemBooks)
  })
})

app.listen(port, function(err){
  console.log(err || `Server running on ${port}`)
})
console.log('Michael')
