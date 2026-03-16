import React from 'react';

interface ProjectData {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  link: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, tagline, description, stack, link } = project;
  
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-5 -mx-2 md:-m-4 rounded-xl hover:bg-black/[0.06] transition-all flex flex-col h-full no-underline"
    >
      <div className="flex-1">
        <h3 className="text-lg font-bold text-black transition-colors">
          {title}
        </h3>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 mb-4">
          {tagline}
        </p>
        <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
        {stack.map(tech => (
          <span 
            key={tech} 
            className="text-[10px] font-medium px-2 py-0.5 bg-gray-50 text-gray-400 rounded border border-gray-100"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;