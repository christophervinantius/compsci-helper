/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button"

export default function PostCard({post, setEdit, setDelete}){
    return (
        <div className="border border-4 border-success rounded p-3 shadow">
            <div className="fw-bold fs-4 text-center">
                {post.title}
            </div>
            <div className="fs-6 mt-3">
                {post.content}
            </div>
            <div className="mt-3 d-flex justify-content-between">
                <Button className="btn btn-primary" onClick={setEdit}>
                    Edit
                </Button>
                <Button className="btn btn-danger" onClick={setDelete}>
                    Delete
                </Button>
            </div>
        </div>
    )
}