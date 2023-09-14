import React from 'react';

import { SiCplusplus } from 'react-icons/si';
import { BiLogoJavascript, BiLogoPython,BiLogoReact,BiLogoTailwindCss,BiLogoMongodb } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiExpress,SiMysql,SiSequelize } from 'react-icons/si';
import { FaCss3Alt,FaNode } from 'react-icons/fa';
import JavaLogo from '../Assets/icons8-java-96.png'; 


const Skills = () => {
  // Add this CSS to make the page no-scroll
 
  return (
    <div className='container h-screen flex min-w-full flex-col overflow-hidden' >
    <div className="flex min-w-full h-[93%]  bg-gray-200 ">
   
      {/* Left Section: Text */}
      <div className="w-full sm:w-1/2  p-4 flex flex-wrap justify-center items-center">
        <h1 className="text-8xl  mx-auto font-bold text-stone-800 mb-4 text-center animate-jump-in animate-duration-[1500ms]">
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
              <SiCplusplus fill="#00599C" className='hover:cursor-pointer hover:scale-125 transition-all duration-300 ' title='C++'/>
              
              <BiLogoJavascript fill="#F7DF1E" className='hover:cursor-pointer hover:scale-125 transition-all duration-300 ' title='Javascript'/>
              <BiLogoPython fill="#3776AB" className='hover:cursor-pointer hover:scale-125 transition-all duration-300 ' title='Python'/>
              {/* <img width="48" height="48" title="Java" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1 " className='hover:cursor-pointer hover:scale-125 transition-all duration-300 '/> */}
              <img width="48" height="48" title="Java" src={JavaLogo} alt="java-coffee-cup-logo--v1 " className='hover:cursor-pointer hover:scale-125 transition-all duration-300 '/>
            </div>
          </div>
          { /* Frontend Technologies */ }
          <div className='flex flex-col mb-4'>
            <h1 className='text-2xl font-bold mb-3'>Front-end Technologies</h1>
            <div className='flex  justify-center items-center space-x-4 text-6xl'>
              <AiFillHtml5 fill="#E34F26" className='hover:cursor-pointer hover:scale-125 transition-all duration-300 ' title='HTML'/>
              <FaCss3Alt fill="#1572B6" className='hover:cursor-pointer hover:scale-125 transition-all duration-300 ' title='CSS'/>
              <BiLogoReact fill="#61DAFB" className='hover:cursor-pointer hover:scale-125 transition-all duration-300 ' title='React'/>
              <BiLogoTailwindCss fill="#06B6D4" className='hover:cursor-pointer hover:scale-125 transition-all duration-300 ' title='TailwindCSS'/>
              <BsFillBootstrapFill fill="#7952B3" className='hover:cursor-pointer hover:scale-125 transition-all duration-300 ' title='Bootstrap'/>
            </div>
          </div>
          {/* Backend Technologies */}
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold mb-3'>Backend-end Technologies</h1>
            <div className='flex  justify-center items-center space-x-5 text-6xl '>
              <FaNode fill='#339933' className='hover:cursor-pointer hover:scale-125 transition-all duration-300 ' title='Node'/>
              <SiExpress fill='#000000' className='hover:cursor-pointer hover:scale-125 transition-all duration-300 'title='ExpressJS'/>
              <SiMysql fill="#4479A1" className='hover:cursor-pointer hover:scale-125 transition-all duration-300 ' title='Mysql'/>
              <BiLogoMongodb  className='hover:cursor-pointer hover:scale-125 transition-all duration-300 text-[#47A248]' title='MongoDB'/>
              <SiSequelize  fill =" #52B0E7" className='hover:cursor-pointer hover:scale-125 transition-all duration-300 'title='Sequelize'/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    {/* Footer*/}
    <footer className="footer h-[7%] bottom-0 bg-white w-full  bg-color-white text-center text-gray-600 py-4 font-semibold">
      Made with ❤️ by Bhavesh Mankar
    </footer>
  </div>
  );
};

export default Skills;
