import React from 'react';
import projectData from '../ProjectData';
import ProjectList from '../Components/ProjectList';

const Project = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
       <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2 w-full z-10">
                <h1 className="w-3/12 text-3xl font-bold hover:text-[#0F4C75]">
                    BM
                </h1>
                <nav className="nav font-semibold text-lg">
                    <ul className="flex items-center space-x-14">
                        <li className="p-2 border-b-2 border-[#0F4C75] border-opacity-0 hover:border-opacity-100 hover:text-[#0F4C75] duration-200 cursor-pointer active">
                            <a href="/">Home</a>
                        </li>

                        <li className="p-2 border-b-2 border-[#0F4C75] border-opacity-0 hover:border-opacity-100 hover:text-[#0F4C75] duration-200 cursor-pointer">
                            <a href="/Skills">Skills</a>
                        </li>
                        <li className="p-2 border-b-2 border-[#0F4C75] border-opacity-0 hover:border-opacity-100 hover:text-[#0F4C75] duration-200 cursor-pointer">
                            <a href="/Blog">Blogs</a>
                        </li>
                        <li className="p-2 border-b-2 border-[#0F4C75] border-opacity-0 hover:border-opacity-100 hover:text-[#0F4C75] duration-200 cursor-pointer">
                            <a href="/About">About Me</a>
                        </li>
                    </ul>
                </nav>
                <div className="w-3/12 flex justify-end">
                    {/* Add your icons or buttons here */}
                </div>
            </header>
      <div className="container mx-auto py-6">
        <ProjectList projects={projectData} />
      </div>
    </div>
  );
};

export default Project;
