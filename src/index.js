const express = require('express');

const connect = require('./configs/db');

const moviesController = require("./controllers/movies.controller")



const app = express();

app.use(express.json());

app.use("/movies",moviesController);
app.use("/movies/:id",moviesController);


app.listen(process.env.PORT || 1342, async () => {
    try{
        await connect();
        console.log('Listening on Port 1342');
    }
    catch(err)
    {
        console.log(err.message);
    }
});