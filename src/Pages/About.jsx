import React from 'react';
import image from "../Assets/notion avatar.png";

export default function About() {
    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2 w-full">
                <h1 className="w-3/12 text-3xl font-bold hover:text-[#0F4C75]">
                    <a href="/">BM</a>
                </h1>
                <nav className="nav font-semibold text-lg">
                    <ul className="flex items-center space-x-14">
                        <li className="p-2 border-b-2 border-transparent hover:border-[#0F4C75] hover:text-[#0F4C75] duration-200 cursor-pointer active">
                            <a href="/">Home</a>
                        </li>
                        <li className="p-2 border-b-2 border-transparent hover:border-[#0F4C75] hover:text-[#0F4C75] duration-200 cursor-pointer">
                            <a href="/Skills">Skills</a>
                        </li>
                        <li className="p-2 border-b-2 border-transparent hover:border-[#0F4C75] hover:text-[#0F4C75] duration-200 cursor-pointer">
                            <a href="/Project">Projects</a>
                        </li>
                        <li className="p-2 border-b-2 border-transparent hover:border-[#0F4C75] hover:text-[#0F4C75] duration-200 cursor-pointer">
                            <a href="/Blog">Blogs</a>
                        </li>
                    </ul>
                </nav>
                <div className="w-3/12 flex justify-end">
                    {/* Add your icons or buttons here */}
                </div>
            </header>

            {/* About me Section */}
            <section className="flex-1 min-w-screen bg-white p-4 md:p-8 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-2/5 flex justify-center items-center">
                    <img src={image} alt="Workspace" className="bg-center w-auto rounded-full shadow-lg border-[#0F4C75]" />
                </div>
                <div className="w-full md:w-3/5 p-4 md:p-8">
                    <h1 className="text-[#0F4C75] font-bold text-4xl mb-4">About Me</h1>
                    <p className=" text-2xl text-gray-700 text-justify">
                        Greetings! I'm <span className='text-[#0F4C75] font-bold '>Bhavesh Mankar</span>, a passionate full-stack developer and a competitive programmer with a deep love for crafting innovative solutions. When I'm not immersed in the world of coding, you'll often find me engrossed in the pages of non-fiction books or capturing the beauty of the world through my camera lens. I thrive on challenges, both in the realm of technology and in the pursuit of knowledge and art. Explore my portfolio to discover the blend of creativity, technical expertise, and a thirst for continuous learning that defines me as both a developer and an individual.
                    </p>
                </div>
            </section>

            <footer className="footer h-[7%] bg-[#FAFAFA] w-full text-center text-gray-600 py-4 font-semibold border-t-2 border-t-neutral-200">
                Made with ❤️ by Bhavesh Mankar
            </footer>
        </div>
    );
}
