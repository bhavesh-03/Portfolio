import React from 'react';
import image from "../Assets/notion avatar.png";
import Navbar  from '../Components/NavBar';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";



export default function About() {
    return (
        
            <div className=" bg-[#000000] min-h-screen">
                <Navbar />
                <section className="flex-1 min-w-screen bg-[#000000] p-10 md:p-8 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-2/5 flex justify-center items-center">
                    <img src={image} alt="Workspace" className="bg-center w-auto rounded-full shadow-lg border-[#0F4C75]" />
                </div>
                <div className="w-full md:w-3/5 p-4 md:p-8">
                    <h1 className="text-white font-bold text-4xl mb-4">About Me</h1>
                    <p className=" text-2xl text-gray-200 text-justify">
                        Hi👋🏻, I'm <span className='font-semibold'>Bhavesh Mankar</span>, full-stack developer and competitive programmer. I love crafting innovative solutions and exploring the world through non-fiction books and photography. Thriving on challenges, I blend creativity, technical expertise, and a thirst for learning in my work and life.
                    </p>
                    <div className="flex  mt-6 flex-wrap justify-center sm:justify-start space-x-4 space-y-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white  rounded-xl p-3 bg-[#373D47] text-lg mt-4">
                            <FaGithub  className='text-4xl'/>
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white  text-lg rounded-xl p-3 bg-[#373D47]">
                            <FaLinkedin className='text-4xl'/>
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white  text-lg rounded-xl p-3 bg-[#373D47]">
                            <FaTwitter className='text-4xl' />
                        </a>
                        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white  text-lg rounded-xl p-3 bg-[#373D47]">
                            <FaInstagram className='text-4xl' />
                        </a>
                        <a href="mailto:youremail@gmail.com" className="text-white text-lg rounded-xl p-3 bg-[#373D47]">
                            <AiOutlineMail className='text-4xl' />
                        </a>
                    </div>
                </div>
            </section>
            </div>
    );
}
