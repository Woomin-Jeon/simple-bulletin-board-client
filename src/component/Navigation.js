import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Writing from "../pages/Writing";
import App from "../App";

const Navigation = () => {

  return (
    <div>
        <Link to="/">새로고침</Link>
        <Link to="/writing">글쓰기</Link>
    </div>
  );
};

export default Navigation;
