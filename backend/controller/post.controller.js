import mongoose from "mongoose"
import Post from "../models/post.model.js"

export const getPosts = async (req, res) => {
    try{
        const posts = await Post.find({})
        res.status(200).json({success: true, data: posts})
    }catch(error){
        console.log(error.message)
        res.status(500).json({success: false, message: "Server error"})
    }
}

export const createPost = async (req, res) => {
    const {title, content} = req.body

    if(!title || !content){
        return res.status(400).json({success: false, message: "All fields are required"})
    }

    const newPost = new Post({title, content})

    try{
        await newPost.save()
        res.status(201).json({success: true, data: newPost})
    }catch(error){
        console.error(error.message)
        res.status(500).json({success: false, message: "Server error"})
    }
}

export const updatePost = async (req, res) => {
    const {id} = req.params
    const {title, content} = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Post not found"})
    }

    if(!title || !content){
        return res.status(400).json({success: false, message: "All fields are required"})
    }

    try{
        const updatedPost = await Post.findByIdAndUpdate(id, {title, content}, {new: true})
        res.status(200).json({success: true, data: updatedPost})
    }catch(error){
        res.status(500).json({success: false, message: "Server error"})
    }
}

export const deletePost = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Post not found"})
    }

    try{
        await Post.findByIdAndDelete(id)
        res.status(200).json({success: true, message: "Post deleted"})
    }catch(error){
        res.status(500).json({success: false, message: "Server error"})
    }
}