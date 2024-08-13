
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addBook, getBookById, updateBook, deleteBook } = require('../controllers/adminControllers');

router.post('/book', auth('admin'), addBook);
router.get('/book/:id', auth('admin'), getBookById);
router.put('/book/:id', auth('admin'), updateBook);
router.delete('/book/:id', auth('admin'), deleteBook);


module.exports = router;
                                                                                                                                                                                                                                                                                                                                                                                                                    