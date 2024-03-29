const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema ({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

// create user Schema & model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    job: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const User = mongoose.model('user', UserSchema);

module.exports = User;