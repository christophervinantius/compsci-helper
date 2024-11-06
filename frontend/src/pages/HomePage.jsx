/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react"
import PostCard from "../components/PostCard"

export default function HomePage(){

    const [posts, setPosts] = useState([])

    const getAllPosts = async () => {
        const response = await fetch("http://localhost:5000/api/posts")
        const data = await response.json()
        setPosts(data.data)
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <div className="w-75 mx-auto">
            <div className="text-center fs-3 fw-bold">
                Welcome to Compsci Helper
            </div>
            <div className="container mt-4">
                <div className="row row-cols-2 g-3">
                    {posts.map((post) => (
                        <div className="col">
                            <PostCard 
                                key={post._id} 
                                post={post}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}