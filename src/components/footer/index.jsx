import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          {/* Thông tin cá nhân */}
          <div className="footer__infor">
            <h3>Tuan Anh</h3>
            <p>Software Engineer</p>
            <p>
              Email: <a href="#gmail">tranvantuananh01012005@gmail.com</a>
            </p>
          </div>

          {/* Mạng xã hội */}
          <div className="footer__folow">
            <h3>Follow Me</h3>
            <div className="footer__social">
              <a
                href="https://github.com/TuanAnhTran2k5?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <GithubOutlined />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
               <LinkedinOutlined />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramOutlined id="in" />
              </a>
            </div>
          </div>

          {/*  Liên kết nhanh */}
          <div className="footer__fastLink">
            <h3>Quick Links</h3>
            <ul>
              <li>
                {" "}
                <Link to={`/about`}>About</Link>
              </li>
              <li>
                {" "}
                <Link to={`/project`}>Projects</Link>
              </li>
              <li>
                <Link to={`/contacts`}>Contacts</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="footer__copyright">
          <p>© 2025 Tuan Anh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
