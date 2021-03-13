const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    customer: {
        type: String,
        required: true
    },
    job: {
        small: String,
        medium: String,
        big: String,
    }
})
module.exports = mongoose.model("Interior", interiorSchema)