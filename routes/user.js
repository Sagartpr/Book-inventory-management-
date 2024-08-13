

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllBooks, borrowBook } = require('../controllers/userControllers');

router.get('/books', auth('user'), getAllBooks);
router.post('/book/:id/borrow', auth('user'), borrowBook);

module.exports = router;


