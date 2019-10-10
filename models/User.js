const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    character: {
        type: Object,
        health: {
            type: Boolean
        },
        speed: {
            type: Number
        },
        bulletSpeed: {
            type: Number
        },
        highScore: {
            type: Number
        }
    }
})

module.exports = User = mongoose.model('users', UserSchema);