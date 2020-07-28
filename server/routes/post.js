const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Post = mongoose.model("Post")

const requireLogin = require('../middleware/requireLogin');
const { getAllPost, getMyPost, createPost } = require('../controllers/post.controller');

router.get('/getAllPost', getAllPost);
router.get('/getMyPost/:id', requireLogin, getMyPost);
router.post('/createpost', requireLogin, createPost);


// router.get('/getMyPost', requireLogin, async (req, res) => {
//     try {
//         const result = await Post.find({ postedBy: req.user._id }).populate("postedBy", "_id name");
//         console.log(result);
//         res.json({
//             count: result.length,
//             data: result,
//         })

        
//     } catch (error) {
//         console.log(error);
        
//     }
// })



// router.post('/createpost', requireLogin, async (req, res) => {

//     try {
//         const { title, body } = req.body;
//         if (!title || !body) {
//             return res.status(422).json({ error: "please add data" })
//         }

//         req.user.password = undefined;

//         const post = new Post({
//             title,
//             body,
//             postedBy: req.user,

//         })

//         const data = await post.save();
//         res.json({ post: data });
//     } catch (error) {
//         console.log(error);

//     }

// })
module.exports = router