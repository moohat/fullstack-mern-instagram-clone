const express = require('express')
const mongoose = require('mongoose')
const Post = mongoose.model("Post")



exports.getAllPost = async (req, res) => {
    try {
        const data = await Post.find().populate("postedBy", "_id name");
        res.json({ data })

    } catch (error) {
        console.log(error);
    }
}

exports.getMyPost = async (req, res) => {
    try {
        const result = await Post.find({ postedBy: req.user._id }).populate("postedBy", "_id name");
        console.log(result);
        res.json({
            count: result.length,
            data: result,
        })

        
    } catch (error) {
        console.log(error);
        
    }
}

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        if (!title || !body) {
            return res.status(422).json({ error: "please add data" })
        }

        req.user.password = undefined;

        const post = new Post({
            title,
            body,
            postedBy: req.user,

        })

        const data = await post.save();
        res.json({ post: data });
    } catch (error) {
        console.log(error);

    }
}