import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Copyright Text</p>
        <a
          href="https://github.com/Martin937/React-shop"
          targrt="blank"
          rel="noreferrer"
        >
          {" "}
          Repo{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
