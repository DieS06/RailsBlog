import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import "../../styles/post_list.css";

const PostList = ({ initialPosts }) => {
    const [posts, setPosts] = useState(initialPosts || []);

    const handlePostCreated = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    return (
        <div className="post-list-container">
            <h1>Publicaciones del Blog</h1>

            <PostForm onPostCreated = {handlePostCreated} />

            {posts.length > 0 ? (
                <ul className="post-list">
                    {posts.map((post) => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>: {post.body}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay publicaciones disponibles.</p>
            )}
        </div>
    );
};

export default PostList;
