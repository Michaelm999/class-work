const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
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
// Book.create({
//   name: 'Hamlet',
//   author: 'Shakespeare',
//   genre: 'drama',
//   isbn: 667
// })

//create a CRUD router for books
//books index
app.get('/books', function(req,res) {
  Book.find({}, function(err, allThemBooks) {
    res.send(allThemBooks)
  })
})
//show a book
app.get('/books/:id', function(req, res){
  Book.findById(req.params.id, function(err, books) {
    if(err) return console.log(err)
    res.send(books)
  })
})
//create a book
app.post('/books', function(req, res) {
  Book.create(req.body, function(err, newBook) {
    if(err) return console.log(err)
    res.json({message: "Book added!", book: newBook})
  })
})

//update a book
app.patch('/books/:id', function(req, res) {
  Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedBook) {
    if(err) return console.log(err)
    res.json({message: "Book updated!", book: updatedBook})
  })
})

// destroy a book
app.delete('/books/:id', function(req, res) {
  Book.findByIdAndRemove(req.params.id, function(err, deletedBook) {
    if(err) return console.log(err)
    res.json({message: "Book Burned!", book: deletedBook})
  })
})

//destroy them all!
app.delete('/books', function(req, res) {
  Book.remove({}, function(err, removedBooks){
    if(err) return console.log(err)
    res.json({message: "Books gone", book: removedBooks})
  })
})

app.listen(port, function(err){
  console.log(err || `Server running on ${port}`)
})
console.log('Michael')
