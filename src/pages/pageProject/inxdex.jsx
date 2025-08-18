import React from 'react'
import Header from '../../components/header'
import ListProject from '../../components/list-project';
import Footer from '../../components/footer';

function PagesProject() {
  return (
    <div>
      <Header/>
      <ListProject title={"My Project"}/>
      <ListProject title={"New"}/>
      <Footer/>
    </div>
  )
}

export default PagesProject;
