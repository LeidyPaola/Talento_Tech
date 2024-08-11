const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    directorOrAuthor: {
        type: String,
        required: true,
    },
});

const author = mongoose.model('author', authorSchema);

module.exports = author;
