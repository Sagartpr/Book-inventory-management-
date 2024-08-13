const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const auth = require('../middleware/auth');


router.get('/books', auth('user'), async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});







router.post('/book/:id/borrow', auth('user'), async (req, res) => {
    try {
        let book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ msg: 'Book not found' });

        if (book.copiesAvailable > 0) {
            book.copiesAvailable -= 1;

            
            const issueDate = new Date();

            
            const returnDate = new Date(issueDate);
            returnDate.setDate(issueDate.getDate() + 15);

            
            const formatDate = (date) => {
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0'); 
                const year = date.getFullYear();
                return `${day}/${month}/${year}`;
            };

            
            await book.save();

            
            res.json({
                msg: 'Book borrowed successfully',
                issueDate: formatDate(issueDate),   
                returnDate: formatDate(returnDate)  
            });
        } else {
            res.status(400).json({ msg: 'All copies are sold out' });
        }
    } catch (err) {
         
        res.status(500).json({ msg: 'Server error' });
    }
});


module.exports = router;

