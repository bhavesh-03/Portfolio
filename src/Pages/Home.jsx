import React from "react";
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
import Skills from '../Pages/Skills';
import Blogs from '../Pages/Blogs';
import { useNavigate } from 'react-router-dom';
import { FaGithub,FaLinkedin  } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function App() {
  const navigate = useNavigate();
  return (
    <div className=" container min-h-screen flex min-w-full flex-col">
      <main className="main flex-grow flex flex-col items-center justify-center bg-[#000000] p-5 rounded">
        <div className="text-white title font-bold text-4xl md:text-6xl text-center">
          Hi!👋🏻 I am <br />
          <span className="text-[#00D587]">Bhavesh Mankar</span>
        </div>
        <p className="text-[#C2C3C3] description text-center text-xl md:text-3xl my-4">
          A Full Stack developer and Problem Solver
        </p>
        <div className="flex p- 2 w-max items-end gap-4">
          <Button css-aifqpu _hover={{ bg: '#CDCDCE' }} borderColor='white' bgColor={"white"}  onClick={() => navigate('/project')} variant='outline'>Projects</Button>
          <Button _hover={{ bg: '#CDCDCE' }} borderColor='white' bgColor={"white"} onClick={() => navigate('/skills')} variant='outline'>Skills</Button>
          <Button _hover={{ bg: '#CDCDCE' }} borderColor='white' bgColor={"white"}  onClick={() => navigate('/blog')} variant='outline'>Blogs</Button>
          <Button _hover={{ bg: '#CDCDCE' }} borderColor='white' bgColor={"white"}  onClick={() => navigate('/about')} variant='outline'>About</Button>
        </div>
       

        {/* For Bottom Buttons */}
        <div className="flex gap-2 flex-col md:flex-row md:space-x-4 mt-6  justify-center items-center flex-wrap ">
          {/* Buttons for Resume and GitHub */}
          < div className="space-x-4 md:justify-end flex">
            {/* Resume */}
            <Link to={""}>
              <Button colorScheme='blue' borderRadius='22px'  leftIcon={<IoIosDocument/>}>Resume</Button>
            </Link>
           
            {/* Linkedin */}
            <Link to={"https://www.linkedin.com/in/bhavesh-mankar-7420ba22a/"}>
            <Button colorScheme='blue' borderRadius='22px'  leftIcon={<FaLinkedin/>}>Linkedin</Button>
            </Link>
          </div>
          {/* LinkedIn and Email Buttons */}
          <div className="space-x-6 flex ">
            <Link to={"https://github.com/bhavesh-03"}>
             <Button colorScheme='blue' borderRadius='22px' leftIcon={<FaGithub/>}>Github</Button>
            </Link>
            <Link to={"mailto:bmmankar25@gmail.com@gmail.com"}>
            <Button colorScheme='blue' borderRadius='22px' href={""} leftIcon={<MdEmail/>}>Email</Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="footer text-center border-t-2 border-t-neutral-200 bg-[#000000] text-white py-4 font-semibold">
        Made with ❤️ by Bhavesh Mankar
      </footer>
    </div>
  );
}

export default App;
