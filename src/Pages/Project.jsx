import React from 'react'
import projectData from '../project.json';
import ProjectList from '../Components/ProjectList';


const Project = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-semibold mb-4">My Projects</h1>
        <ProjectList projects={projectData} /> 
      </header>
    {/* <h2>hero</h2> */}
    </div>
  )
}

export default Project

