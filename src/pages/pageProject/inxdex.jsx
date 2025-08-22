import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import ListProject from "../../components/list-project";
import Footer from "../../components/footer";
import "./index.scss";

function PagesProject() {
  const text = "Welcome to my personal project🤡";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(text.substring(0, i + 1));
      i++;
      if (i === text.length) clearInterval(typing);
    }, 80); // tốc độ gõ (ms)
    return () => clearInterval(typing);
  }, []);
  return (
    <div>
      <Header />
      <div className="container_PJS">
        <h1>{displayText}</h1>
        <p>
          Below are personal projects that I have been working on during my
          daily studies and practice.
        </p>
      </div>
      <ListProject title={"My Project"} />
      <ListProject title={"New"} />
      <Footer />
    </div>
  );
}

export default PagesProject;
