import React, { useEffect, useState } from "react";
import axios from "axios";

const MostCommented = () => {
  const [commentedPosts, setCommentedPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/most-commented-posts")
      .then(response => setCommentedPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="section">
      <h2>Most Commented Posts</h2>
      {commentedPosts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Comments: {post.comments}</p>
        </div>
      ))}
    </div>
  );
};

export default MostCommented;
