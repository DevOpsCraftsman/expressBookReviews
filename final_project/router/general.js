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
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(present(books))
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  res.send(present(books[req.params.isbn]))
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const booksbyauthor = Object.values(books).filter(b => b.author === req.params.author)
  res.send(present({ booksbyauthor }))
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const booksbytitle = Object.values(books).filter(b => b.title == req.params.title)
  res.send(present({ booksbytitle }))
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  res.send(present(books[req.params.isbn].reviews))
});

module.exports.general = public_users;
