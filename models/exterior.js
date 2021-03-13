const mongoose = require("mongoose")
const Schema = mongoose.Schema

const exteriorSchema = new Schema({
    customer: {
        type: String,
        required: true
    },
    small: {
        type: String,
    },
    medium: {
        type: String,
    }, 
    big: {
        type: String,
    },
})
module.exports = mongoose.model("Exterior", exteriorSchema)