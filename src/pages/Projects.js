import React from 'react';
import Project from '../components/Project';

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'A cool project I built.', link: '#' },
    { title: 'Project 2', description: 'Another awesome project.', link: '#' },
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
