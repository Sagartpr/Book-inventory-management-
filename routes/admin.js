const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const auth = require('../middleware/auth');


router.post('/book', auth('admin'), async (req, res) => {
    const { title, author, isbn, copiesAvailable } = req.body;

    try {
        let book = new Book({ title, author, isbn, copiesAvailable  });
        await book.save();
        res.json(book);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});


router.get('/book/:id', auth('admin'), async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ msg: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});


router.put('/book/:id', auth('admin'), async (req, res) => {
    const { title, author, copiesAvailable  } = req.body;

    try {
        let book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ msg: 'Book not found' });

        book.title = title || book.title;
        book.author = author || book.author;
        book.copiesAvailable = copiesAvailable || book.copiesAvailable;
        

        await book.save();
        res.json(book);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});


router.delete('/book/:id', auth('admin'), async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Book removed' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;   

                                                                                                                                                                                                                                                                                                                                                                                                                              