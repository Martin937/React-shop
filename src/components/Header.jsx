import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <a href="!#" className="nav-logo">
          SHOP
        </a>
        <ul className="nav-list">
          <li>
            <a
              href="https://github.com/Martin937/React-shop"
              targrt="blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
