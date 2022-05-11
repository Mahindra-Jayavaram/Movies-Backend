const express = require('express');

const connect = require('./configs/db');

const userController = require('./controllers/user.controller');

const { signup, login } = require('./controllers/auth.controller');

const app = express();

app.use(express.json());

app.post('/signup', signup);
app.post('/login', login);

// app.get("/signup", signup)

// const Signup = require('./src/controllers/user.controller')

// app.use("/signup", signup)

app.use('/users', userController);

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