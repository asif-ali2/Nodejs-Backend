const mongoose = require('mongoose');

const itemDetails = new mongoose.Schema({
    title: {
        type: String,

    },
    author: {
        type: String,

    },
    description: {
        type: String,
    },
    publicYear: {
        type: String,

    },
    isbn: {
        type: String,
    },
}, {
    timestamps: true
})

const userItem = mongoose.model("Item", itemDetails);

module.exports = userItem;
