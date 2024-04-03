import React from 'react';
import image from "../Assets/notion avatar.png";
import Navbar  from '../Components/NavBar';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Box } from '@chakra-ui/react';
import ContactCard from '../Components/ContactCard';
import Footer from '../Components/Footer';


export default function About() {
    return (
            <section className='bg-[#000000] font-Inter min-h-screen'>
                <div className=" ">
                <Navbar />
                <section className="flex-1 min-w-screen bg-[#000000] p-10 flex flex-col md:flex-row items-center">
                
                <div className="w-full md:w-3/5 p-4 md:p-8">
                    <Box className=" mx-auto max-w-screen-lg">
                        <div className='heading relative'>
                        <h1 className="text-4xl md:text-5xl font-bold text-white z-10">About</h1>
                        <h2 className="text-3xl md:text-4xl font-semibold text-teal-400 absolute top-6 md:top-8">Me</h2>
                        </div>
                    </Box>

                    <p className="text-lg font-medium mt-6 md:mt-10  text-gray-200 text-justify">
                    👨‍🎓 This is  <strong className='text-teal-500 text-lg'>Bhavesh Mankar</strong> , a final-year computer science undergraduate, pursuing B.Tech from Vishwakarma Institute of Information Technology, Pune. I am always fascinated by programming and passionate about exploring the latest technology and developing new cool and innovative products. I am an enthusiastic and curious individual who works hard and is highly ambitious in improving my knowledge of real-world applications.
                    </p>
                    <p className=" text-lg  mt-4 font-medium md:mt-10 text-gray-200 text-justify">
                ⚡I'm a <strong className='text-teal-500 text-lg'>Full Stack Developer and competitive programmer</strong> . I specialize in building SaaS products and microservices apps, solving real-world problems with precision. I'm skilled in both <strong className='text-teal-500 text-lg'>frontend and backend</strong>  architecture, ensuring scalable solutions based on core principles. By blending UX/UI design with intuitive development, I create user-friendly experiences.Outside of coding, I enjoy <strong className='text-teal-500 text-lg'>watching anime📺, reading books📖, and photography📸</strong>, which bring fresh perspectives to my work.
                    </p>      

                    <div className="flex  mt-6 flex-wrap justify-center sm:justify-start space-x-4 space-y-4">
                        <a href="https://github.com/bhavesh-03" target="_blank" rel="noopener noreferrer" className="text-white  rounded-xl hover:scale-110 p-3 bg-[#373D47] text-lg mt-4">
                            <FaGithub   className='text-4xl'/>
                        </a>
                        <a href="https://www.linkedin.com/in/bhavesh-mankar-7420ba22a/" target="_blank" rel="noopener noreferrer" className="text-white  hover:scale-110 text-lg rounded-xl p-3 bg-[#373D47]">
                            <FaLinkedin className='text-4xl'/>
                        </a>
                        <a href="https://twitter.com/chat_masala_25" target="_blank" rel="noopener noreferrer" className="text-white  hover:scale-110 text-lg rounded-xl p-3 bg-[#373D47]">
                            <FaTwitter className='text-4xl' />
                        </a>
                        <a href="https://www.instagram.com/bhaveshmankar03/" target="_blank" rel="noopener noreferrer" className="text-white  hover:scale-110 text-lg rounded-xl p-3 bg-[#373D47]">
                            <FaInstagram className='text-4xl' />
                        </a>
                        <a href="mailto:bmmankar25@gmail.com" className="text-white text-lg  hover:scale-110 rounded-xl p-3 bg-[#373D47]">
                            <AiOutlineMail className='text-4xl' />
                        </a>
                    </div>
                </div>
            </section>

            
            {/* Creating a contact me page */}
            {/* <ContactCard/> */}
            </div>
            <Footer/>
            </section>
            
    );
}
