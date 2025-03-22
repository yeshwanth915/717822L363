import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/feed")
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="section">
      <h2>📰 Latest Posts</h2>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Date: {new Date(post.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
