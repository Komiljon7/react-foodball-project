import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Futbolchilar Sayti</h1>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Bosh Sahifa</Link>
            </li>
            <li>
              <Link to="/players">Futbolchilar</Link>
            </li>
            <li>
              <Link to="/about">Biz Haqimizda</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;