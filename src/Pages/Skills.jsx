import React from 'react';

import { SiCplusplus } from 'react-icons/si';
import { BiLogoJavascript, BiLogoPython, BiLogoJava,BiLogoReact,BiLogoTailwindCss,BiLogoMongodb } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiExpress,SiMysql,SiSequelize } from 'react-icons/si';
import { FaCss3Alt,FaNode } from 'react-icons/fa';
import { Tooltip } from "@material-tailwind/react";


const Skills = () => {
  // Add this CSS to make the page no-scroll
  const noScrollStyle = {
    overflow: 'hidden',
    height: '100vh', // Ensure the container takes up the full viewport height
  };

  return (
    <div className='container min-h-screen flex min-w-full flex-col' style={noScrollStyle}>
    <div className="flex min-w-full bg-gray-200 ">
   
      {/* Left Section: Text */}
      <div className="w-full sm:w-1/2 h-screen p-4 flex flex-wrap justify-center items-center">
        <h1 className="text-8xl  mx-auto font-bold text-stone-800 mb-4 text-center">
          The <span className='text-[#3B82F6]'>Tools</span> and <span className='text-[#3B82F6]'>Technologies</span> I have worked with
        </h1>
      </div>

      {/* Right Section: Icons */}
      <div className="w-full sm:w-1/2 p-4 flex justify-center items-center">
        <div className="w-full sm:w-1/2 p-4 text-center">
          {/* Language Section */}
          <div className='flex flex-col mb-4'>
            <h1 className='text-2xl font-bold mb-3'>Languages</h1>
            <div className='flex flex-wrap justify-center items-center space-x-5 text-6xl'>
              <SiCplusplus fill="#00599C" className='hover:cursor-pointer' title='C++'/>
              <BiLogoJavascript fill="#F7DF1E" className='hover:cursor-pointer' title='Javascript'/>
              <BiLogoPython fill="#3776AB" className='hover:cursor-pointer' title='Python'/>
              <img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
            </div>
          </div>
          {/* Frontend Technologies */}
          <div className='flex flex-col mb-4'>
            <h1 className='text-2xl font-bold mb-3'>Front-end Technologies</h1>
            <div className='flex  justify-center items-center space-x-4 text-6xl'>
              <AiFillHtml5 fill="#E34F26" className='hover:cursor-pointer' title='HTML'/>
              <FaCss3Alt fill="#1572B6" className='hover:cursor-pointer' title='CSS'/>
              <BiLogoReact fill="#61DAFB" className='hover:cursor-pointer' title='React'/>
              <BiLogoTailwindCss fill="#06B6D4" className='hover:cursor-pointer' title='TailwindCSS'/>
              <BsFillBootstrapFill fill="#7952B3" className='hover:cursor-pointer' title='Bootstrap'/>
            </div>
          </div>
          {/* Backend Technologies */}
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold mb-3'>Backend-end Technologies</h1>
            <div className='flex  justify-center items-center space-x-5 text-6xl '>
              <FaNode fill='#339933' className='hover:cursor-pointer ' title='Node'/>
              <SiExpress fill='#000000' className='hover:cursor-pointer' title='ExpressJS'/>
              <SiMysql fill="#4479A1" className='hover:cursor-pointer' title='Mysql'/>
              <BiLogoMongodb fill="#47A248" className='hover:cursor-pointer' title='MongoDB'/>
              <SiSequelize  fill =" #52B0E7" className='hover:cursor-pointer' title='SiSequelize'/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    {/* Footer*/}
    <footer className="fixed bottom-0 w-full  bg-color-white text-center text-gray-600 py-4 font-semibold">
      Made with ❤️ by Bhavesh Mankar
    </footer>
  </div>
  );
};

export default Skills;
