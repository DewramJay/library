const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({

    firstName: {
        type : String,
        required : true
    },

    lastName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
})

const Student = mongoose.model("Student",StudentSchema);

module.exports = Student;