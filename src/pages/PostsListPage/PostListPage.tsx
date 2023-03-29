import React from "react";
import {Link} from "react-router-dom";

const PostListPage: React.FC = () => {
    const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" },
    ];

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>å
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostListPage;