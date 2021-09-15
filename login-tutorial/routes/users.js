const express = require('express');
const router = express.Router();

// User model
const User = require('../models/User');

// Login Page
router.get('/login', (req, res) => {
    res.render("login");
});

// Register Page
router.get('/register', (req, res) => {
    res.render("register");
});

// Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    // Check required fields
    if (!name || !email || !password || !password2) {
        errors.push({msg:"Please fill in all fields"});
    }

    // Check passwords match
    if (password !== password2) {
        errors.push({msg: "Passwords do not match"})
    }

    // Check pass length
    if (password.length < 6) {
        errors.push({msg:"Password should be at least 6 characters long"})
    }

    if (errors.length > 0) {
        res.render("register", {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        // Validation passed
        User.findOne({ email:email })
            .then(user => {
                if(user) {
                    // User exists
                    errors.push({msg:'Email is already registered'});
                    res.render("register", {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });
                } else {
                    
                }
            });
    }
})

module.exports = router;