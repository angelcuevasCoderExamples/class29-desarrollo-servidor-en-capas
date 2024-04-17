const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    number: Number,
    business: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'business'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    products: [],
    status: String, 
    totalPrice: Number
})

const ordersModel = mongoose.model('orders', orderSchema);

module.exports = ordersModel;