/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react"
import PostCard from "../components/PostCard"
import PopUp from "../components/PopUp"
import Form from 'react-bootstrap/Form'

export default function HomePage({filteredPosts}){
    const [deletePopUp, setDeletePopUp] = useState(false)
    const [deletePostId, setDeletePostId] = useState(null)

    const [editPopUp, setEditPopUp] = useState(false)
    const [editPost, setEditPost] = useState(null)

    const [posts, setPosts] = useState([])

    const getAllPosts = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`)
        const data = await response.json()
        setPosts(data.data)
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    useEffect(() => {
        setPosts(filteredPosts)
    }, [filteredPosts])

    const handleEditPost = async (post) => {
        const id = post._id
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })

        if(response.ok){
            setEditPopUp(false)
            setEditPost(null)
            getAllPosts()
        }
    }

    const handleDeletePost = async (id) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/${id}`, {
            method: "DELETE"
        })

        if(response.ok){
            setDeletePopUp(false)
            getAllPosts()
        }
    }

    return (
        <div className="w-75 mx-auto text-center">
            <div className="fs-3 fw-bold">
                Welcome to Compsci Helper
            </div>
            <div className="container mt-4">
                {(posts && posts.length === 0) && (
                    <div className="mx-auto fs-5 d-flex row gap-3">
                        <div className="text-center">
                            No posts found. Go make one now!
                        </div>
                    </div>   
                )}
                {(posts && posts.length > 0) && (
                    <div className="row row-cols-2 g-3">
                        {posts.map((post) => (
                            <div className="col">
                                <PostCard 
                                    key={post._id} 
                                    post={post}
                                    setEdit={() => {
                                        setEditPopUp(true)
                                        setEditPost(post)
                                    }}
                                    setDelete={() => {
                                        setDeletePopUp(true)
                                        setDeletePostId(post._id)
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {editPopUp && (
                <PopUp 
                    type="edit"
                    title="Post Edit"
                    message={
                        <Form>
                            <Form.Group className="mb-3">
                            <Form.Label>Title <span className="text-danger fw-bold">*</span></Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Enter title..."
                                    value={editPost.title}
                                    onChange={(e) => setEditPost({...editPost, title: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Content <span className="text-danger fw-bold">*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Enter content..."
                                    value={editPost.content}
                                    onChange={(e) => setEditPost({...editPost, content: e.target.value})}
                                />
                            </Form.Group>
                        </Form>
                    }
                    show={editPopUp}
                    setShow={() => {
                        setEditPopUp(false)
                        setEditPost(null)
                    }}
                    setAction={() => handleEditPost(editPost)}
                    disabled={editPost.title === "" || editPost.content === ""}
                />
            )}
            {deletePopUp && (
                <PopUp
                    type="alert"
                    title="Post Deletion Confirmation"
                    message="Are you sure you want to delete this post?"
                    show={deletePopUp}
                    setShow={() => {
                        setDeletePopUp(false)
                        setDeletePostId(null)
                    }}
                    setAction={() => handleDeletePost(deletePostId)}
                />
            )}
        </div>
    )
}