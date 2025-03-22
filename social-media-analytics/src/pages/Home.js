import React from "react";
import TrendingPosts from "../components/TrendingPosts";
import MostCommented from "../components/MostCommented";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="container">
      <TrendingPosts />
      <MostCommented />
      <Feed />
    </div>
  );
};

export default Home;
