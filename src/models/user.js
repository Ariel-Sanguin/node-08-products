const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name : {
        type: String,
        required:[true, 'Name required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name required']
    },
    email: {
        type: String,
        required: [true, 'Email required'],
        unique: true,
        index: true
    },
    birthDate: Date,
    password: {
        type: String,
        required: [true, 'Password required']
    },
    role: {
        type: String,
        required: [true],
        default: 'USER_ROLE',
        enum: ['USER_ROLE', 'ADMIN_ROLE']
    },
    enable: {
        type: Boolean,
        required: true,
        default: true
    }



},
{timestamps: true}
);

userSchema.plugin(mongoosePaginate);
userSchema.plugin(uniqueValidator, {message: 'already exist in the database'});

module.exports = mongoose.model('users', userSchema);