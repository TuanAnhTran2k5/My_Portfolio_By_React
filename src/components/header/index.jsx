import React, { useState } from "react";
import "./index.scss";
import { CloseSquareOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
        <h1>TuanAnh</h1>
      </div>

      <nav className="header__link">
        <div className={`menu ${isOpen ? "active" : ""}`}>
          <Link to={`/`}>Home</Link>
          <Link to={`/about`}>About</Link>
          <Link to={`/project`}>Projects</Link>
          <Link to={`/contacts`}>Contacts</Link>
        </div>

        <div className="menusp">
          {isOpen ? (
            <CloseSquareOutlined onClick={() => setIsOpen(false)} />
          ) : (
            <MenuOutlined onClick={() => setIsOpen(true)} />
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
