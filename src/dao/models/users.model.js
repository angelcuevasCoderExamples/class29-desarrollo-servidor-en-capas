const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders: [{ 
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'orders'
    }]
})

const usersModel = mongoose.model('users', userSchema);

module.exports = usersModel; 