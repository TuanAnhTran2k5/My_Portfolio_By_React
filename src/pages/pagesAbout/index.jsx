import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./index.scss";
import {
  GithubOutlined,
  GlobalOutlined,
  Html5Outlined,
  JavaOutlined,
  JavaScriptOutlined,
} from "@ant-design/icons";

function PageAbout() {
  return (
    <div>
      <Header />
      <div className="containerAb">
        <div className="containerAb__heroheader">
          <div className="ingAvata">
            <img
              src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
              alt="Avata"
            />
          </div>
          <div className="myInfo">
            <h2>I'am Tuan Anh</h2>
            <h3>
              Study at: <span>FPT University</span>
            </h3>
            <h3>
              Year of birth: <span>2005</span>
            </h3>
            <h3>
              Dream: <span>Create a game or app</span>
            </h3>
          </div>
        </div>
        <div className="containerAb__abMe">
          <div className="introduce">
            <h1>Introduce</h1>
            <p>
              👨‍💻 Hello, my name is Tuan Anh. I am currently studying Information
              Technology at FPT University. I started programming at a very
              early age and gradually realized that I have a special interest in
              creating technology products.
            </p>
            <p>
              ✨ In addition to studying in class, I focus on self-studying more
              about web programming - from HTML, CSS, JavaScript to modern
              frameworks. Every time I complete a small website, I feel very
              happy because I see my idea become a real product.
            </p>
            <p>
              🚀 My goal in the near future is to build more personal projects
              and learn more about creating apps and games to practice and learn
              more new skills, It helps me to gradually become a professional
              software engineer.
            </p>
          </div>

          <div className="mySkills">
            <h1>My skills</h1>
            <p>
            
              <JavaOutlined className="icon" />
              Java: Main programming language, I am focusing on learning to
              master the foundation.
            </p>
            <p>
              <Html5Outlined  className="icon" />
              HTML, CSS/SCSS: Can build and customize web interfaces from basic
              to beautiful.
            </p>
            <p>
          
              <JavaScriptOutlined className="icon" />
              JavaScript : Can write logic and add interactions to web pages.
            </p>
            
            <p> <GlobalOutlined className="icon"/>React: Get started, build modern and flexible interfaces.</p>
            <p>
              
              <GithubOutlined className="icon"/>
              Git/GitHub: Code management, storage and effective teamwork
              support.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageAbout;
