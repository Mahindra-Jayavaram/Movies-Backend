require("dotenv").config();
const jwt = require("jsonwebtoken"); 
const User = require('../models/user.model');

const newToken = (user) => {
    console.log(process.env);
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};


const signup = async (req, res) => {
    try {

        let user = await User.findOne({ email: req.body.email }).lean().exec();
        
        if (user) return res.status(400).send({message: "Please try another email"});

            user = await User.create(req.body);

            const token = newToken(user);

            console.log(token)

            res.send({user, token});
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
};

const login = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email});
        console.log(user);
        if(!user) return res.status(400).send({ message: "Please try another email or password"});

        // if user matches, check the password
        const match = await user.checkPassword(req.body.password);

        // if password not matched, throw an error
        if (!match) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide the correct email address and password"
            })
        }

        // else create a new token
        const token = newToken(user);

        // return the user and the token
        return res.status(201).send({ user, token});
    } catch (e) {
        res.status(500).send({ message: e.message, status: "failed" });
    }
};

module.exports = { signup, login };