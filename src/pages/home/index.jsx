import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import ListProject from "../../components/list-project";
import Footer from "../../components/footer";
import "./index.scss";
import { Link } from "react-router-dom";
import {
  JavaOutlined,
  LaptopOutlined,
  RocketOutlined,
} from "@ant-design/icons";

function Home() {
  const text = "Software Engineer";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;
      if (i === text.length) clearInterval(typing);
    }, 100); // tốc độ gõ (ms)
    return () => clearInterval(typing);
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="hero">
          <div className="hero__content">
            <h2>Hello.</h2>
            <h3>I'am Tuan Anh 😎</h3>
              <h1>{displayText}</h1> {/* typing effect ở đây */}
            {/* <h1>Software Engineer</h1> */}
            <div className="content__button">
              <Link to="/project">
                <button className="btn-project">My Projects</button>
              </Link>
              <button className="btn-resume">My resume</button>
            </div>
          </div>
          <div className="hero__img">
            <img
              src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
              alt="Avata"
            />
          </div>
        </div>

        <div className="code">
          <p>HTML </p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Github</p>
        </div>
      </div>
      {/* ==================About ME========================= */}
      <div className="about">
        <div className="about__services">
          <div class="about__service-item">
            <div class="about__service-icon">
              <LaptopOutlined />
            </div>
            <h3 class="about__service-title">Website Development</h3>
          </div>
          {/* ===================================================================== */}
          <div class="about__service-item">
            <div class="about__service-icon">
              <JavaOutlined />
            </div>
            <h3 class="about__service-title">Basic Backend Development</h3>
          </div>

          {/* ===================================================================== */}
          <div class="about__service-item">
            <div class="about__service-icon">
              <RocketOutlined />
            </div>
            <h3 class="about__service-title">New skills in the future</h3>
          </div>
        </div>

        <div className="about__content">
          <h2>About me</h2>
          <p>
            Hello! My name is Tuan Anh, a second-year Software Engineering
            student at FPT University. I am passionate about technology and
            enjoy turning ideas into real-world products through programming.
          </p>
          <p>
            I am proficient in Java, HTML, and CSS, and have a basic
            understanding of JavaScript. I have also been learning React for
            over two months to develop modern, responsive web applications that
            deliver an optimized user experience.
          </p>
          <p>
            My goal is not only to write code but also to create useful and
            user-friendly products, while continuously improving my skills
            through personal and group projects.
          </p>
        </div>
      </div>

      <ListProject title={"My Project"} />
      <Footer />
    </div>
  );
}

export default Home;
