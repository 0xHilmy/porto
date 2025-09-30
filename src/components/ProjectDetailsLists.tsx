import React from 'react';

interface ProjectDetailsListsProps {
    features?: string[];
    challenges?: string[];
    results?: string[];
}

const ProjectDetailsLists: React.FC<ProjectDetailsListsProps> = ({
    features,
    challenges,
    results
}) => {
    return (
        <div className="space-y-8">
            {/* Key Features Section */}
            {features && features.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Key Features
                    </h3>
                    <ul className="space-y-3">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                <span className="text-gray-700 leading-relaxed">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Technical Challenges Section */}
            {challenges && challenges.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        Technical Challenges
                    </h3>
                    <ul className="space-y-3">
                        {challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                <span className="text-gray-700 leading-relaxed">{challenge}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Results & Achievements Section */}
            {results && results.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Results & Achievements
                    </h3>
                    <ul className="space-y-3">
                        {results.map((result, index) => (
                            <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                <span className="text-gray-700 leading-relaxed">{result}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailsLists;