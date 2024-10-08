const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const user = new Schema({
    id: String,
    username: String,
    apiKey: String,
    uploads: Number,
    selectedDomain: String,
    embedData: {
        title: String,
        description: String,
        color: String
    }
});

const userModel = mongoose.model("user", user);

module.exports = userModel;
