// const express = require('express');

// const router = express.Router();

// module.exports = router;

const express = require('express');

const Route = express.Router()

const User = require("../models/user.model");

Route.post('', async(req, res)=>{
    try{
        const user = await User.create(req.body);
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

Route.get("", async(req, res) => {
    try{
        const user = await User.find().lean().exec()
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send('err', err.message)
    }
})
Route.get("/:id", async(req, res) => {
    try{
        const user = await User.findById().lean().exec()
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send('err', err.message)
    }
})

Route.patch("/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,}).lean().exec();
        return res.status(201).send(user);
    }
    catch(e){
        return res.status(500).send(e.message)
    }
})
module.exports = Route