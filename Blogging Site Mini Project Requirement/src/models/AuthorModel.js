const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            enum: ["Mr", "Mrs", "Miss"],
            required: true,
           
            trim: true
        },
        fname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        lname: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }



    }, { timestamps: true });

module.exports = mongoose.model("Author", authorSchema);

