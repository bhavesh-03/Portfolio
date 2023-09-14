import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">{project.name}</h2>
          <p className="text-gray-600">{project.description}</p>
          <p className="text-sm mt-2">
            <strong>Tech Stack:</strong> {project.techStack}
          </p>
          <div className="mt-4">
            <a
              href={project.githubLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
            <a
              href={project.liveDemoLink}
              className="ml-4 text-green-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
    // <div>projects</div>
  );
};

export default ProjectList;
