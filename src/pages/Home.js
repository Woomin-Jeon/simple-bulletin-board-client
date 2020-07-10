import React from 'react';
import Posts from "../component/Posts";
import Menu from "../component/Menu";
import Navigation from "../component/Navigation";
import {BrowserRouter as Router} from "react-router-dom";

const Home = () => {
  return (
    <>
      <Menu />
      <Navigation />
      <Posts />
    </>
  );
};

export default Home
