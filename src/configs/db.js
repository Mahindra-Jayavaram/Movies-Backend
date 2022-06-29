const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://mahi:mahi123@cluster0.gdsujf1.mongodb.net/movies")
}

module.exports = connect;