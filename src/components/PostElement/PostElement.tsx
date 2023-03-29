import React from "react";
import './PostElement.css';
import {IPostElementProps} from "./PostElement.intarface";
import {useNavigate} from "react-router-dom";

const PostElement: React.FC<IPostElementProps> = ({id, post}) => {
    const navigation = useNavigate();
    return (
        <div onClick={() => navigation(`/posts/${id}`)} className="c-post-element-container">
            <h1 className="c-post-element-title">{post.title}</h1>
        </div>
    )
}

export default PostElement;