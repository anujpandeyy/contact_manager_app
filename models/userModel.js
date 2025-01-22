const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true,"Please enter user name"]
    },
    email:{
        type: String,
        required: [true,"Please enter user email"],
        unique: [true,"Email is taken"]
    },
    password:{
        type: String,
        required: [true,"Please add username and password"]
    }
},{
    timestamps: true
});

module.exports = mongoose.model("User",userSchema);