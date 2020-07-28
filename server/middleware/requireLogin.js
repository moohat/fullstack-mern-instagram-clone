const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys')
const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = async (req, res, next) => {
    try {
        const {authorization} = await req.headers;
        // authorization === Bearer rahasia (secret_key token)
        if(!authorization){
            res.status(401).json({error: 'Please login first'})
        }
        const token = authorization.replace("Token ", "");
        jwt.verify(token, JWT_SECRET, async (err, payload) => {
            if(err){
                return res.status(401).json({error: 'Please login first'})
            }

            const { _id } = await payload;
        const check = await User.findById(_id);
        req.user = check;
        next()
        })
        
    } catch (error) {
        
    }
}