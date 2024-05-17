const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Helper function
const present = obj => JSON.stringify(obj, null, 4)

public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',async function (req, res) {
  //Write your code here
  const allBooks = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(books))
  })
  res.send(present(allBooks))
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', async function (req, res) {
  //Write your code here
  const bookByIsbn = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(books[req.params.isbn]))
  })
  res.send(present(bookByIsbn))
 });
  
// Get book details based on author
public_users.get('/author/:author', async function (req, res) {
  //Write your code here
  const booksByAuthor = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(
      Object.values(books).filter(b => b.author === req.params.author)
    ))
  })
  res.send(present(booksByAuthor))
});

// Get all books based on title
public_users.get('/title/:title', async function (req, res) {
  //Write your code here
  const booksByTitle = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(
      Object.values(books).filter(b => b.title == req.params.title)
    ))
  })
  res.send(present(booksByTitle))
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const reviews = books[req.params.isbn].reviews
  res.send(present(reviews))
});

module.exports.general = public_users;
