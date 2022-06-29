const express = require("express");
const middleware = require("../middlewares/authenticate")
const Movie = require("../models/movies.model");

const route= express();

route.post("",

 async(req,res) =>{

    try {
        const movie = await Movie.create(req.body)
        return res.status(200).send(movie)
    } catch (error) {
        console.log(error)
        return res.status(500).send("error:",error)
    }
})
route.get("",async(req,res)=>{
    try {
        const movie = await Movie.find().lean().exec();
        return res.status(200).send(movie);
    } catch (error) {
        console.log(error);

          return res.status(400).send(error.message);
    }
})

route.get("/:id",async(req,res)=>{
  try {
      const movie =await Movie.findById(req.params.id).lean().exec();
      return res.status(200).send(movie);
  } catch (error) {
      console.log(error);

        return res.status(400).send(error.message);
  }
})

route.patch("/:id",middleware,async(req,res)=>{
    try{
        const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true,}).lean().exec();
        return res.status(201).send(movie);
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})
route.delete("/:id",middleware,async(req,res)=>{
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(movie);
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})

module.exports = route;