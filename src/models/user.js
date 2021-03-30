const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    name: String,
    lastName: String,
    email: String,
    birthDate: Date,



},
{timestamps: true}
);

module.exports = mongoose.model('users', userSchema);