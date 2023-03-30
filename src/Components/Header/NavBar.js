import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          {" "}
          <div className="navbar-link">Home</div>
        </Link>
        <Link to="/Catalog">
          <div className="navbar-link">Catalog</div>
        </Link>
      </nav>
    </div>
  );
}
