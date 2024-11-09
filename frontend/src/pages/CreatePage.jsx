import { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import PopUp from "../components/PopUp"

export default function CreatePage(){
    const [successPopUp, setSuccessPopUp] = useState(false)
    const [failPopUp, setFailPopUp] = useState(false)

    const [newPost, setNewPost] = useState({
        title: "",
        content: ""
    })

    const handleCreatePost = async (newPost) => {
        const {title, content} = newPost

        const response = await fetch(`/api/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, content}),
        })

        if(response.ok){
            setSuccessPopUp(true)
        }else{
            setFailPopUp(true)
        }
    }

    return (
        <div className="w-50 mx-auto">
            <div className="text-center fs-3 fw-bold">
                Create New Post
            </div>
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Title <span className="text-danger fw-bold">*</span></Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter title..."
                        value={newPost.title}
                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Content <span className="text-danger fw-bold">*</span></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter content..."
                        value={newPost.content}
                        onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    />
                </Form.Group>

                <div className="text-center">
                    {(newPost.title === "" || newPost.content === "") ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>
                                    Title and content must be filled first to submit.
                                </Tooltip>
                            }
                        > 
                            <span className="w-25 d-inline-block">
                                <Button
                                    className="w-100 mt-3"
                                    variant="success"
                                    disabled
                                >
                                    Submit
                                </Button>
                            </span>
                        </OverlayTrigger>
                    ) : (
                        <Button
                            className="w-25 mt-3"
                            variant="success"
                            onClick={() => handleCreatePost(newPost)}
                        >
                            Submit
                        </Button>
                    )}
                </div>
            </Form>
            {successPopUp && (
                <PopUp 
                    type="info"
                    show={successPopUp}
                    title="Post Creation Success"
                    message="Your post has been created successfully."
                    variant="success"
                    navigateTo="/"
                />
            )}
            {failPopUp && (
                <PopUp 
                    type="info"
                    show={failPopUp}
                    setShow={() => setFailPopUp(false)}
                    title="Post Creation Failed"
                    message="Failed to create post. Please try again."
                    variant="danger"
                />
            )}
        </div>
    )
}