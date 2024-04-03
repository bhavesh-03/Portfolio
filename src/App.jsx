import React  from "react";
import {Routes,Route} from 'react-router-dom';
import { useState, useEffect } from 'react'
import  Home  from "./Pages/Home.jsx";
import Skills from "./Pages/Skills.jsx";
import About from "./Pages/About.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Project from "./Pages/Project.jsx";
import Navbar from "./Components/NavBar.jsx";
import AudioPlayer from "./Components/Audio.jsx";

function App() {
     const [isMuted, setIsMuted] = useState(true)

   const toggleMute = () => {
      setIsMuted(!isMuted)
   }

   useEffect(() => {
      function disableRightClick(e) {
         e.preventDefault()
      }
      document.addEventListener('contextmenu', disableRightClick)
      return () => {
         document.removeEventListener('contextmenu', disableRightClick)
      }
   }, [])
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Skills" element={<Skills/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Blog" element={<Blogs/>}></Route>
      <Route path="/Project" element={<Project/>}></Route>
    </Routes>
    {/* <AudioPlayer isMuted={isMuted} toggleMute={toggleMute} /> */}
    </div>
  );
}

export default App;