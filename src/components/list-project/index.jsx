import React from "react";
import Projects from "../card-project";
import "./index.scss";
import ProjectCard from "../card-project";
function ListProject({title}) {
  const myproject = [
    {
      img: "https://cdn4.vieclam24h.vn/dev_la_gi_1_eda0723736.jpeg",
      nameProject: "DEV",
    },
    {
      img: "https://toidicodedao.com/wp-content/uploads/2018/07/web-development.jpg",
      nameProject: "DEV2",
    },
    {
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
      nameProject: "DEV3",
    },
   
  ];

  return (
    <div className="container">
      <div className="container__list" >
        <h1>{title}</h1>
         <div className="list-card">
        {myproject.map((item) => (
          <ProjectCard img={item.img} nameProject={item.nameProject} />
        ))}{" "}
      </div>
      </div>
    </div>
  );
}

export default ListProject;
