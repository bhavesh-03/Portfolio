import React from 'react';
import workspace from "../Assets/workspace-with-computer-fotor-bg-remover-20230916163329.png";

export default function About() {
    return (
        <div className="h-screen flex flex-col">
            <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2 w-full">
                <h1 className="w-3/12 text-3xl font-bold hover:text-[#0F4C75]">
                    BM
                </h1>
                <nav className="nav font-semibold text-lg">
                    <ul className="flex items-center space-x-14">
                        <li className="p-2 border-b-2 border-[#0F4C75] border-opacity-0 hover:border-opacity-100 hover:text-[#0F4C75] duration-200 cursor-pointer active">
                            <a href="/">Home</a>
                        </li>
                        <li className="p-2 border-b-2 border-[#0F4C75] border-opacity-0 hover:border-opacity-100 hover:text-[#0F4C75] duration-200 cursor-pointer">
                            <a href="/Skills">Skills</a>
                        </li>
                        <li className="p-2 border-b-2 border-[#0F4C75] border-opacity-0 hover:border-opacity-100 hover:text-[#0F4C75] duration-200 cursor-pointer">
                            <a href="/Project">Projects</a>
                        </li>
                        <li className="p-2 border-b-2 border-[#0F4C75] border-opacity-0 hover:border-opacity-100 hover:text-[#0F4C75] duration-200 cursor-pointer">
                            <a href="/Blog">Blogs</a>
                        </li>
                        
                    </ul>
                </nav>
                <div className="w-3/12 flex justify-end">
                    {/* Add your icons or buttons here */}
                </div>
            </header>

            {/* About me Section */}
            <section className="flex-1 min-w-screen bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-3/10">
                    <img src={workspace} alt="Workspace" className="w-full" />
                </div>
                <div className="w-full md:w-7/10 p-4 md:p-8">
                    <h1 className="text-[#3282B8] font-bold text-4xl mb-4">About Me</h1>
                    <p className="text-lg text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, doloribus dolorum voluptatum sed porro consectetur dignissimos. Id fuga officia consectetur obcaecati provident vel dolor voluptates quo quasi! Doloribus harum animi dicta, quaerat ducimus modi? Dolores et facilis eligendi beatae velit dolorem autem, reiciendis dignissimos, nostrum quos sapiente, necessitatibus optio! Necessitatibus.
                    </p>
                </div>
            </section>

            <footer className="footer h-[7%] bg-[#FAFAFA] w-full bg-color-white text-center text-gray-600 py-4 font-semibold border-t-2 border-t-neutral-200">
                Made with ❤️ by Bhavesh Mankar
            </footer>
        </div>
    );
}
