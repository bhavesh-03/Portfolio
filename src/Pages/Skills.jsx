import React from 'react';

import { SiCplusplus } from 'react-icons/si';
import { BiLogoJavascript ,BiLogoPython,BiLogoJava} from 'react-icons/bi';
import { Tooltip } from "@material-tailwind/react";

const Skills = () => {
  return (
    <div className="container mx-auto p-8 flex overflow-hidden relative">
   
      {/* Left Section: Text */}
      <div className="w-1/2 h-screen p-4 flex flex-wrap justify-center items-center">
        <h1 className="text-[6vw] mx-auto font-bold text-stone-800 mb-4 text-center">
          The tools and Technologies I have worked with
        </h1>
      </div>

      {/* Right Section: Icons */}
      <div className="w-1/2 p-4 flex flex-wrap justify-center items-center">
        <div className="w-1/3 p-4 text-center ">
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>Languages</h1>
            <div className='flex flex-row justify-center items-center space-x-4 '>
             
              <span><SiCplusplus className='text-7xl' title='c++'/></span>
              <BiLogoJavascript className='text-7xl'/>
              <BiLogoPython className='text-7xl'/>
              <BiLogoJava className='text-7xl'/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
