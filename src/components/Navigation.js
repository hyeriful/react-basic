import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  // Link는 라우터 안에 있어야 함 (App.js에서 HashRouter안에 Navigation있음)
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
