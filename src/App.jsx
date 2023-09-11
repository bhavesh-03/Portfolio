import React  from "react";
import {Routes,Route} from 'react-router-dom';
import  Home  from "./Pages/Home.jsx";
import Skills from "./Pages/Skills.jsx";
import Education from "./Pages/Education.jsx";
import Blogs from "./Pages/Blogs.jsx";



function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Skills" element={<Skills/>}></Route>
      <Route path="/Education" element={<Education/>}></Route>
      <Route path="/Blog" element={<Blogs/>}></Route>
    </Routes>
  );
}

export default App;