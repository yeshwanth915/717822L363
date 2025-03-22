import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/trending-posts")
      .then(response => setTrendingPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="section">
      <h2>🔥 Trending Posts</h2>
      {trendingPosts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Engagement: {post.engagement}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
