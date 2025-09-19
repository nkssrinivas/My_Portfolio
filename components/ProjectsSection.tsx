
import React from 'react';
import Section from './Section';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-2 group">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-light">{project.title}</h3>
      <p className="text-medium mb-4 text-sm leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-primary text-accent text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-auto pt-4 flex space-x-4 text-accent font-semibold">
        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">View Code</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Live Demo</a>}
      </div>
    </div>
  </div>
);

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
