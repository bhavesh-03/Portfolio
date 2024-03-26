import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import Skills from '../Pages/Skills';
import Blogs from '../Pages/Blogs';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div className="container min-h-screen flex min-w-full flex-col">
      <main className="main flex-grow flex flex-col items-center justify-center bg-[#FFFFFF] p-5 rounded">
        <div className="title font-bold text-4xl md:text-6xl text-center">
          Hi!👋🏻 I am <br />
          <span className="text-[#3282B8]">Bhavesh Mankar</span>
        </div>
        <p className="description text-center text-xl md:text-3xl my-4">
          A Full Stack developer and Problem Solver
        </p>
        <div className="flex w-max items-end gap-4">
          <Button  onClick={() => navigate('/project')} variant="outlined" size="sm">Projects</Button>
          <Button  onClick={() => navigate('/blog')} variant="outlined" size="sm">Blogs</Button>
          <Button  onClick={() => navigate('/skills')} variant="outlined" size="sm">Skills</Button>
          <Button  onClick={() => navigate('/about')} variant="outlined" size="sm">About</Button>
        </div>
       

        {/* For Bottom Buttons */}
        <div className="flex gap-2 flex-col md:flex-row md:space-x-4 mt-6  justify-center items-center flex-wrap">
          {/* Buttons for Resume and GitHub */}
          <div className="space-x-4 justify-end mb-2 md:mb-0 flex">
            <a
              target="_blank"
              rel='noreferrer'
              href={""}
              className="btn btn-bottom bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-blue-400"
            >
              Resume
            </a>
            <a
              target="_blank"
              rel='noreferrer'
              href={"https://github.com/bhavesh-03"}
              className="btn btn-bottom bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-blue-400"
            >
              GitHub
            </a>
          </div>
          {/* LinkedIn and Email Buttons */}
          <div className="space-x-6 flex">
            <a
              target="_blank"
              rel='noreferrer'
              href={"https://www.linkedin.com/in/bhavesh-mankar-7420ba22a/"}
              className="btn btn-bottom bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-blue-400"
            > 
              LinkedIn
            </a>
            <a
              target="_blank"
              rel='noreferrer'
              href={"mailto:bmmankar25@gmail.com@gmail.com"}
              className="btn btn-bottom bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-blue-400"
            >
              Email
            </a>
          </div>
        </div>
      </main>
      <footer className="footer text-center border-t-2 border-t-neutral-200 bg-[#FAFAFA] text-gray-600 py-4 font-semibold">
        Made with ❤️ by Bhavesh Mankar
      </footer>
    </div>
  );
}

export default App;
