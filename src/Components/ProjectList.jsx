import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
      {projects.map((project) => (
        <div
          className='bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden w-full md:w-96'
          key={project.id}
          style={{ marginBottom: '2rem' }}
        >
          <div className="relative">
            <img
              src={project.imageURL} 
              alt={project.name}
              className="w-full h-auto hover:scale-110 transition-transform duration-300"
              style={{ padding: '2rem' }}
            />
          </div>

          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            <p className="mb-3">{project.description}</p>
            <div className="mb-3">
              <strong>Tech Stack:</strong> 
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 px-2 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-2 mb-2 flex justify-center items-center">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm bg-white border border-neutral-200 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              GitHub Repo
            </a>
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-1 text-sm bg-white border border-neutral-200 rounded-lg font-bold hover:bg-green-500 hover:text-white transition-colors duration-300"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
