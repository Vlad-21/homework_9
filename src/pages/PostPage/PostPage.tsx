import React, {useEffect, useState} from "react";
import './PostPage.css'
import {useLocation, useNavigate} from "react-router-dom";
import {IPost} from "../../interfaces/postInterface";
import {getPost} from "../../http/httpPost";
import {IUser} from "../../interfaces/userInterface";
import {getUser} from "../../http/httpUser";
import Loader from "../../components/Loader/Loader";

const PostPage: React.FC = () => {
    const [post, setPost] = useState<IPost>();
    const [user, setUser] = useState<IUser>();
    const [showLoader, setShowLoader] = useState<boolean>(false);
    const location = useLocation();
    const navigation = useNavigate();
    const id:number = +location.pathname.split("/")[location.pathname.split("/").length - 1];
    useEffect(() => {
        setShowLoader(true);
        getPost(id).then((postData) => {
            setPost(postData);
            getUser(postData.userId).then((userData) => {
                setUser(userData);
                setShowLoader(false);
            }).catch((e) => {
                console.log(e);
            })
        }).catch((e) => {
            console.log(e);
        });
    }, []);

    return (
        <div className="p-post-container">
            <div className="p-post-author-container">
                <h2 onClick={() => navigation(`/users/${post?.userId}`)} className="p-post-author">Author: {user?.name}</h2>
            </div>
            <div className="p-post-title-container">
                <h1 className="p-post-title">{post?.title}</h1>
            </div>
            <div className="p-post-text-container">
                <p className="p-post-text">{post?.body}</p>
            </div>
            {showLoader && <Loader />}
        </div>
    )
}
export default PostPage;