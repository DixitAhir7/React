import React from "react";
import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header className="dashboard-header">
      <h1>Dashboard</h1>

      <Link to='home'>home</Link>
      <Link to='about'>about</Link>
    </header>
  );
}

export default Header;