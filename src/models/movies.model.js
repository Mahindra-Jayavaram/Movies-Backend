const mongoose = require("mongoose")

const movieSchema= new mongoose.Schema({
    movieName:{type:String ,require:true },
    rating:{type:Number,require:true},
    cast:{type:Array , require:true},
    genre:{type:String , require:true},
    releseDate:{type:Date,require:true },
},{
    versionKey:false,
    timestamps:true
});


const Movie=mongoose.model("movie",movieSchema);
module.exports= Movie;