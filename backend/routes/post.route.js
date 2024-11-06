import express from "express"
import { createPost, deletePost, getPosts, updatePost } from "../controller/post.controller.js"

const router = express.Router()

router.get("/", getPosts)
router.post("/", createPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

export default router