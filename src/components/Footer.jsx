import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Copyright Text</p>
        <a href="#!"> Repo </a>
      </div>
    </footer>
  );
};

export default Footer;
