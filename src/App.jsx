import React  from "react";
import {Routes,Route} from 'react-router-dom';
import  Home  from "./Pages/Home.jsx";
import Skills from "./Pages/Skills.jsx";
import About from "./Pages/About.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Project from "./Pages/Project.jsx";



function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Skills" element={<Skills/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Blog" element={<Blogs/>}></Route>
      <Route path="/Project" element={<Project/>}></Route>
    </Routes>
  );
}

export default App;