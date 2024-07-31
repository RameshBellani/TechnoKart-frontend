import React, { useState } from 'react';
import axios from 'axios';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`https://technokart-server.onrender.com/api/posts/search?q=${query}`);
    setPosts(response.data);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for posts"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
