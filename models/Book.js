const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn:{ type: String,required: true},
    copiesAvailable: { type: Number, required: true }
    
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;