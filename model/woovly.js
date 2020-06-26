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
    }
},{timestamps:true})

module.exports = mongoose.model("Woovly",woovlySchema);