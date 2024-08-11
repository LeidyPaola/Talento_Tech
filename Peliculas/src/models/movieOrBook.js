const mongoose = require('mongoose');

const movieOrBookSchema = new mongoose.Schema({
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

const MovieOrBook = mongoose.model('MovieOrBook', movieOrBookSchema);

module.exports = MovieOrBook;
