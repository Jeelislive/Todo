require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const isLoggedIn = require('./middlewares/isLoggedIn');
const { fail } = require('assert');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL);

app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (existingUser) throw new Error("User already exist");

        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        const payload = {
            id: user._id
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.status(200).json({
            status: "success",
            message: "signup successfully",
            date: {
                user: user,
                token: token
            }
        });

    } catch (error) {
        res.status(400).json({
            status: fail,
            message: error.message
        })
    }

});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            throw new Error("invalid email or password")
        }

        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
        const isEqual = hashedPassword === user.password;
        if (!isEqual) {
            throw new Error("Invalid email or password");
        }

        const payload = {
            id: user._id
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            status: "success",
            message: "Login successfully",
            data: {
                token: token,
                user: user,
            }
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: fail,
            message: error.message,
        })
    }
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});