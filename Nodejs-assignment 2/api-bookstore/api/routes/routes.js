const express = require('express');
const fs = require('fs');
const bookController = require('../controllers/bookController');
const userController = require('../controllers/userController');
const auth = require('../auth/auth');
const router = new express.Router();

router.post('/user/create', userController.createUser );

router.post('/user/login', userController.userLogin );

router.post('/user/logout', auth, userController.userLogout );

router.post('/user/logoutall', auth, userController.userLogoutAll );

router.get('/user/books/:id',auth, bookController.getBookDetailById );

router.get('/user/books', auth, bookController.getBookDetailByGenre );

router.get('/user/booksauthor', auth, bookController.getBookDetailByAuthorName );

// router.get('/books', bookController.getAllBookDetail );

router.post('/user/books', auth, bookController.createBookDetail );

// router.patch('/books/:id', bookController.updateBookDetailById );

// router.delete('/books/:id', bookController.removeBookDetailById );

//router.delete('/user/books', auth,  bookController.deleteBookDetailByName );

module.exports = router;