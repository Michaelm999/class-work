const express = require('express');
const mongoose = require('mongoose');

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
