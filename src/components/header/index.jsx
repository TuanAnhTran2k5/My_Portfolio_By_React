import React from "react";
import "./index.scss";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>TuanAnh</h1>
      </div>

      <nav className="header__link">
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/project`}>Projects</Link>
        <Link to={`/contacts`}>Contacts</Link>
        <MenuOutlined id="menu" />
      </nav>
    </div>
  );
}

export default Header;
