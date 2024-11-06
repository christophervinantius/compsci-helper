/* eslint-disable react/prop-types */
export default function PostCard({post}){
    return (
        <div className="border border-4 border-success rounded p-3 shadow">
            <div className="fw-bold fs-4 text-center">
                {post.title}
            </div>
            <div className="fs-6 mt-3">
                {post.content}
            </div>
        </div>
    )
}