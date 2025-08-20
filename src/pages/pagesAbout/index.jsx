import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./index.scss";

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
          <h1>Idea???</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageAbout;
