import React from "react";
import { Link } from 'react-router-dom';
import Skills from '../Pages/Skills';
import { GrDocumentPdf } from 'react-icons/gr';


function App() {
  return (
    <div className="container min-h-screen flex min-w-full flex-col ">
      <main className="main flex-grow flex flex-col items-center justify-center bg-gray-100 p-5 rounded">
        <div className="title font-bold text-6xl text-center">
          Hi!👋🏻 I am <br />
          <span className="text-blue-500">Bhavesh Mankar</span>
        </div>
        <p className="description text-center text-3xl my-4">
          A Full Stack developer and Problem Solver
        </p>
        <div className="flex flex-row space-x-7 mt-4">
          <Link to='/Projects' className=" bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-400">  <span>Projects</span></Link>
          <Link to='/Blog' className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-400">Blogs</Link>
          <Link to='/Skills' className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-400y" element={<Skills />}>Skills</Link>
          <Link to='/Education' className="bg-blue-100 hover:bg-blue-200 text-blue-900 hover:text-blue-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-400">Education</Link>
        </div>
        {/* For Bottom Buttons */}
        <div className="flex flex-row space-x-4 mt-4">
          <p className=" bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-gray-400"><a target="_blank" rel='noreferrer' href={""} >Resume</a></p>
          <a target="_blank" rel='noreferrer' href={""} className="bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-gray-400">GitHub</a>
          <a target="_blank" rel='noreferrer' href={""} className="bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-gray-400">LinkedIn</a>
          <a target="_blank" rel='noreferrer' href={""} className="bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-gray-400">Email</a>
        </div>
      </main>
      <footer className="footer text-center text-gray-600 py-4 font-semibold">
        Made with ❤️ by Bhavesh Mankar
      </footer>
    </div>
  );
}

export default App;
