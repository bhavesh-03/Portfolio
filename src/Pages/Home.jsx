import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Footer from "../Components/Footer";
import { ageInYears } from '../Utils/lib/AgeInYears';
import { getFormattedTime } from '../Utils/lib/Time';

function App() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

    useEffect(() => {
        const intervalId = setInterval(() => setCurrentTime(getFormattedTime()), 1000);
        return () => clearInterval(intervalId);
    }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-[#000000] flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center  p-5 rounded">
        <div className="text-white title font-bold text-4xl md:text-6xl text-center">
          Hi!👋🏻 I am <br />
          <span className="text-[#00D587]">Bhavesh Mankar</span>
        </div>
        <p className="text-zinc-500 description text-center text-xl md:text-2xl my-4">
          21y/o Developer, India • {currentTime}
        </p>
        <div className="flex p-2 w-max items-end gap-4">
          <Button _hover={{ bg: '#CDCDCE' }} borderColor='white' bgColor={"white"} onClick={() => navigate('/project')} variant='outline'>Projects</Button>
          <Button _hover={{ bg: '#CDCDCE' }} borderColor='white' bgColor={"white"} onClick={() => navigate('/skills')} variant='outline'>Skills</Button>
          <Button _hover={{ bg: '#CDCDCE' }} borderColor='white' bgColor={"white"} onClick={() => navigate('/blog')} variant='outline'>Blogs</Button>
          <Button _hover={{ bg: '#CDCDCE' }} borderColor='white' bgColor={"white"} onClick={() => navigate('/about')} variant='outline'>About</Button>
        </div>

        {/* For Bottom Buttons */}
        <div className="flex gap-2 flex-col md:flex-row md:space-x-4 mt-6 justify-center items-center flex-wrap">
          {/* Buttons for Resume and GitHub */}
          <div className="space-x-4 md:justify-end flex">
            {/* Resume */}
            <Link to={"https://drive.google.com/file/d/1c7TbWyxBykhHH0ojjI_zWPZAnwat-cuw/view?usp=drive_link"}>
              <Button colorScheme='blue' borderRadius='22px' leftIcon={<IoIosDocument />}>Resume</Button>
            </Link>

            {/* Linkedin */}
            <Link to={"https://www.linkedin.com/in/bhavesh-mankar-7420ba22a/"}>
              <Button colorScheme='blue' borderRadius='22px' leftIcon={<FaLinkedin />}>Linkedin</Button>
            </Link>
          </div>
          {/* LinkedIn and Email Buttons */}
          <div className="space-x-6 flex">
            <Link to={"https://github.com/bhavesh-03"}>
              <Button colorScheme='blue' borderRadius='22px' leftIcon={<FaGithub />}>Github</Button>
            </Link>
            <Link to={"mailto:bmmankar25@gmail.com"}>
              <Button colorScheme='blue' borderRadius='22px' leftIcon={<MdEmail />}>Email</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
