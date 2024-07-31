import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
import './BlogPost.css'; // Import the CSS file

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`https://technokart-server.onrender.com/api/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="blog-post-container">
      <h2 className="blog-post-title">{post.title}</h2>
      <p className="blog-post-content">{post.content}</p>
      <div className="comment-form-container">
        <h3>Add a Comment</h3>
        <CommentForm postId={id} />
      </div>
    </div>
  );
}

export default BlogPost;
