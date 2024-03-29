require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/user');


const app = express();



app.use(express.json());
app.use(cors({
    origin: [ "https://deploy-mern-1whq.vercel.app" ],
    methods: [ "POST", "GET" ],
    credentials: true,
}));



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

app.get('/', (req, res) => {
    res.json("helllllllllllllo");
});


app.use(session({
    secret: 'your-secret-key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: false
}));

const requireLogin = (req, res, next) => {
    if (req.session.isAuthenticated) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized - User not logged in" });
    }
};

app.post('/login', requireLogin,  (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email: email })
        .then(User => {
            if (User) {
                if (User.password === password) {
                    // Set session to indicate user is logged in
                    req.session.isAuthenticated = true;
                    res.json("success");
                } else {
                    res.json("the password is incorrect");
                }
            } else {
                res.json("no record exist");
            }
        })
        .catch(err => res.json(err));
});

app.post('/signup', (req, res) => {
    userModel.create(req.body)
        .then(user => 
            res.json(user))
        .catch(err => 
            res.json(err));
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
