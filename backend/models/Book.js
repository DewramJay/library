const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({

    bookTitle: {
        type : String,
        required : true
    },

    bookCategory: {
        type : String,
        required : true
    },
    bookRegNo: {
        type : String,
        required : true
    },
    language: {
        type : String,
        required : true
    },
    imageUrl: {
        type : String,
        required : true
    }
})

const Book = mongoose.model("Book",BookSchema);

module.exports = Book;