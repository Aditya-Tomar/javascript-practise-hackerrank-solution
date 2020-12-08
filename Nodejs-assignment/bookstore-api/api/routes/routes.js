const express = require('express');
const controller = require('../controllers/controller');
const router = new express.Router();


router.get('/', ( req, res ) => {
    res.send({
        status : 'connected'
    });
});

router.get('/books/:id', controller.getBookDetailById );

router.get('/books', controller.getAllBookDetail );

router.post('/books', controller.addBookDetail );

router.patch('/books/:id', controller.updateBookDetailById );

router.delete('/books/:id', controller.removeBookDetailById );

module.exports = router;