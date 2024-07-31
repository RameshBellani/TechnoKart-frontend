import React, { useState } from 'react';
import axios from 'axios';

function CommentForm({ postId }) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://technokart-server.onrender.com/api/comments', { content, postId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setContent('');
    } catch (error) {
      console.error('Failed to post comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
