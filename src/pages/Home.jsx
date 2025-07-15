import Footer from "../components/Footer";
import VideoGrid from "../components/grid/VideoGrid";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";

import React from "react";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
