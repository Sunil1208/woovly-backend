const mongoose = require('mongoose')

const woovlySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    photo: {
        type: Buffer,
        contentType: String,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model("Woovly",woovlySchema);