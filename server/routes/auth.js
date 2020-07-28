const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys')
const requireLogin = require('../middleware/requireLogin')

router.get('/protected', requireLogin, async (req, res, next) => {
    try {
        res.json({ message: 'token berhasil didapat, selamat datang' })
    } catch (error) {
        res.send({ message: error })
    }
})

// router.post('/signup',(req, res) =>{
//     const {name, email, password} = req.body;
//     if(!email || !password || !name){
//         res.status(422).json({error: "please add all the fields"})
//     }
//     User.findOne({email:email}).then((savedUser) =>{
//         if(savedUser){
//             return res.status(422).json({error: "user already exists with that email"})
//         }
//         const user = new User({
//             email,
//             password,
//             name
//         });
//         user.save()
//         .then(user =>{
//             res.json({message: "saved succesfully", user})
//         })
//         .catch(err => {
//             console.log(err);            
//         })
//     })
//     .catch(err => {
//         console.log(err);            
//     })

// })

//using async
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const check = await User.findOne({ email: email })
        if (check) {
            return res.json({ error: "email already exists" })
        } else {
            //compress password to bcrypt
            const hashedPassword = await bcrypt.hash(password, 12);

            // req.user.password = undefined;
            const user = new User({
                email,
                password: hashedPassword,
                name
            });
            const data = await user.save();

            res.json({ message: "succesfully insert data", data: data })
        }
    }
    catch (error) {
        console.log(error);

    }
})

router.post('/signin', async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: 'please add email or password' })
        }
        const check = await User.findOne({ email: email })
        if (!check) {
            return res.status(422).json({ error: 'Invalid Email or Password' })
        } else {
            //compare password using bcrypt.compare
            const comparePassword = await bcrypt.compare(password, check.password);
            if (comparePassword) {
                // res.json({message: 'succesfulley signed in'})
                const token = jwt.sign({ _id: check._id }, JWT_SECRET, { expiresIn: '1h' })
                res.json({ message: 'successfully signed in', token: token })

            } else {
                return res.status(422).json({ error: 'Invalid Email or Password' })
            }
        }
    } catch (error) {
        console.log(error);

    }


})

module.exports = router;