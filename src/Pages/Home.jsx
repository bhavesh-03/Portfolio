import React from "react";
import { Link } from 'react-router-dom';
import Skills from '../Pages/Skills';
import Blogs from '../Pages/Blogs';



function App() {
  return (
    <div className="container min-h-screen flex min-w-full flex-col  ">
      <main className="main flex-grow flex flex-col items-center justify-center bg-[#FFFFFF] p-5 rounded">
        <div className="title font-bold text-6xl text-center">
          Hi!👋🏻 I am <br />
          <span className="text-[#3282B8]">Bhavesh Mankar</span>
        </div>
        <p className="description text-center text-3xl my-4">
          A Full Stack developer and Problem Solver
        </p>
        <div className="flex flex-row space-x-7 mt-4">
          <Link to='/Project' className=" bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-400">  <span>Project</span></Link>
          <Link to='/Blog' className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-400" element={<Blogs/>}>Blogs</Link>
          <Link to='/Skills' className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-400y" element={<Skills />}>Skills</Link>
          <Link to='/About' className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-400">About Me</Link>
        </div>
        {/* For Bottom Buttons */}
        <div className="flex flex-row space-x-4 mt-4">
          <p className=" bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-gray-400"><a target="_blank" rel='noreferrer' href={""} >Resume</a></p>
          <a target="_blank" rel='noreferrer' href={"https://github.com/bhavesh-03"} className="bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-gray-400">GitHub</a>
          {/* Linkedin  */}
          <a target="_blank" rel='noreferrer' href={"https://www.linkedin.com/in/bhavesh-mankar-7420ba22a/"} className="bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-gray-400">LinkedIn</a>
          <a target="_blank" rel='noreferrer' href={"mailto:bmmankar25@gmail.com@gmail.com"} className="bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-gray-400">Email</a>
        </div>
      </main>
      <footer className="footer text-center border-t-2 border-t-neutral-200 bg-[#FAFAFA] text-gray-600 py-4 font-semibold">
        Made with ❤️ by Bhavesh Mankar
      </footer>
    </div>
  );
}

export default App;
