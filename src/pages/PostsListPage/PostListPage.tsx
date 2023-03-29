import React, {useEffect, useState} from "react";
import './PostsListPage.css';
import {getPosts} from "../../http/httpPost";
import {IPost} from "../../interfaces/postInterface";
import PostElement from "../../components/PostElement/PostElement";
import Loader from "../../components/Loader/Loader";

const PostsListPage: React.FC = () => {
    const [posts, setPosts] = useState<Array<IPost>>([]);
    const [showLoader, setShowLoader] = useState<boolean>(false);
    useEffect(() => {
        setShowLoader(true);
        getPosts().then((data) => {
            setPosts(data);
            setShowLoader(false);
        }).catch((e) => {
            console.log(e)
        })
    }, [])
    return (
        <div className="p-post-list-container">
            {posts.map((item) => (
                <PostElement key={item.id} id={item.id} post={item}/>
            ))}
            {showLoader && <Loader />}
        </div>
    );
}

export default PostsListPage;