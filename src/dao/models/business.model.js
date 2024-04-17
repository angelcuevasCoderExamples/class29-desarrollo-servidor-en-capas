const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: String,
    products:[] //{id:1, description, price}
})

const businessModel = mongoose.model('business',businessSchema)

module.exports = businessModel;