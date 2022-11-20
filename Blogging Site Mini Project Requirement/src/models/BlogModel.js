const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true

    },
    body: {
        type: String,
        required: true,
        trim: true


    },
    authorId: { 
        type: ObjectId,
        required: true,
        refs: "Author",
        trim: true
    },
    tags: {
        type: [String],
        trim: true

    },
    category: {
        type: String,
        required: true,
        trim: true

    },
    subcategory: { type: [String] },
    publishedAt: Date,
    isPublished: { type: Boolean, default: false },
    deletedAt: Date,
    isDeleted:
    {
        type: Boolean, default: false
    }
}, { timestamps: true })


module.exports = mongoose.model("Blog", blogSchema);