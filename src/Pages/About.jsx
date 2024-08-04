import React from 'react';
import Navbar from '../Components/NavBar';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Box } from '@chakra-ui/react';
import Footer from '../Components/Footer';
import AnimeCard from '../Components/Cards/AnimeCard';
import LinksAboutCard from '../Components/Cards/LinksAboutCard';
import BooksCard from '../Components/Cards/BooksCard';
// import ContactMe from '../Components/Cards/Contactme';


const About = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <section className=" px-4 py-10 max-w-3xl  items-start mx-auto min-h-screen text-white">
        <div className="text-left"> {/* Adjusted alignment to start */}
  <h1 className="text-3xl md:text-5xl font-bold mb-2">About</h1>
  <h2 className="text-xl md:text-3xl font-semibold mb-4 text-teal-400">Me</h2>
</div>
        <p className="text-lg md:text-xl mb-6">
          👨‍🎓 Hi, I'm <span className="font-semibold">Bhavesh Mankar</span>, a pre-final-year computer science undergrad at Vishwakarma Institute of Information Technology, Pune. Passionate about programming, I love exploring the latest tech and crafting innovative products. I'm a Full Stack Developer and competitive programmer, adept at building SaaS products and microservices apps. Skilled in frontend and backend, I focus on scalable solutions with great UX/UI. Beyond coding, I enjoy watching anime📺, reading books📖, and photography📸.
        </p>
        <div className="flex justify-center  space-x-4  mb-8">
          <SocialLink href="https://github.com/bhavesh-03" icon={<FaGithub />}  />
          <SocialLink href="https://www.linkedin.com/in/bhavesh-mankar-7420ba22a/" icon={<FaLinkedin />} />
          <SocialLink href="https://twitter.com/chat_masala_25" icon={<FaTwitter />} />
          <SocialLink href="https://www.instagram.com/bhaveshmankar03/" icon={<FaInstagram />} />
          <SocialLink href="mailto:bmmankar25@gmail.com" icon={<AiOutlineMail />} />
        </div>
        <div class="flex flex-col md:p-0 p-10 md:flex-row justify-center md:justify-between md:space-x-4">
          <div class="w-full md:w-1/2 mb-6 md:mb-0">
              <AnimeCard />
          </div>
          <div class="w-full md:w-1/2">
              <div class="flex flex-col space-y-4">
                  <LinksAboutCard />
                  <BooksCard />
              </div>
        </div>
</div>
      {/* <ContactMe /> */}
      </section>
      <Footer className="mt-auto"/>
    </div>
  );
};

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white text-3xl rounded-xl p-3 bg-[#373D47] hover:scale-110">
    {icon}
  </a>
);

export default About;
