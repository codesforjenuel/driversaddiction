import React from "react";
import Nav from "../components/Nav";
import Dotw from "../components/Dotw";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className=" m-0 h-full w-full flex flex-col items-center bg-gradient-to-br from-white to-stone-300">
      <Nav />
      <Dotw />
      <Footer />
    </div>
  );
};

export default Blog;
