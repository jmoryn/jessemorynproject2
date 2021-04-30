const mongoose = require('mongoose')

const showSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    time: {type: String, required: true},
    price: {type: Number, min: 0, required: true},
    description: String,
    image: String
})

const Show = mongoose.model('Show', showSchema)

module.exports = Show
