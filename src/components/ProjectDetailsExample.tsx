import React from 'react';
import { projects } from '../data/projectsDataDetailed';
import ProjectDetailsLists from './ProjectDetailsLists';

const ProjectDetailsExample: React.FC = () => {
    // Example using the first project (Autotracking Theodolite System)
    const project = projects[0];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    {project.description}
                </p>
            </div>

            <ProjectDetailsLists
                features={project.features}
                challenges={project.challenges}
                results={project.results}
            />

            {/* Project Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                        <span className="font-semibold text-gray-800">Duration:</span>
                        <span className="text-gray-600 ml-2">{project.duration}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-800">Team Size:</span>
                        <span className="text-gray-600 ml-2">{project.teamSize}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-800">Role:</span>
                        <span className="text-gray-600 ml-2">{project.role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsExample;