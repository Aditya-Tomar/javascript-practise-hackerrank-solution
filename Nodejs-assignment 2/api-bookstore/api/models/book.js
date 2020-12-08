const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    book_name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    author_name: {
        type: String,
        required: true,
        trim: true,
    },

    publish_date: {
        type: Date,
        required: true,
        trim: true,
    },
    
    genre: {
        type: String,
        trim: true,
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    }
});


const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;