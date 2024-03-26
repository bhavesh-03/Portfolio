import React from 'react';
import projectData from '../Utils/ProjectData';
import ProjectList from '../Components/ProjectList';
import Navbar from '../Components/NavBar';

const Project = () => {
  return (
    
    <div className=" bg-[#000000] min-h-screen">
      <Navbar />
      <div className="container mx-auto py-6 px-3 ">
        <ProjectList projects={projectData} />
      </div>
    </div>
  );
};

export default Project;
