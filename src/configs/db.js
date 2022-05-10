const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://mahi:mahi1234@cluster0.bd5ab.mongodb.net/users")
}

module.exports = connect;