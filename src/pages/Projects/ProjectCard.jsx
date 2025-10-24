import React, { useState } from 'react';
export const ProjectCard = React.memo(({ project }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <article
            className="group relative overflow-hidden border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10"
            style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.5) 0%, rgba(17, 24, 39, 0.5) 100%)'
            }}
        >
            <div className="relative h-56 overflow-hidden">
                {!imageLoaded && !imageError && (
                    <div className="h-full w-full animate-pulse bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700" />
                )}
                <img
                    src={project.image}
                    alt={`image of ${project.title}`}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${!imageLoaded || imageError ? 'hidden' : 'block'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                />
                {imageError && (
                    <div className="flex h-full w-full items-center justify-center bg-gray-800">
                        <span className="text-gray-500">Image not available</span>
                    </div>
                )}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-purple-900/80 px-3 py-1 text-xs font-medium text-purple-200 backdrop-blur-sm"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span
                            className="rounded-full bg-purple-900/80 px-3 py-1 text-xs font-medium text-purple-200 backdrop-blur-sm"
                        >
                            + more
                        </span>
                    )}
                </div>
            </div>

            <div className="relative p-5">
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-xl font-bold text-transparent">
                        {project.title}
                    </h3>
                    <div className="flex space-x-2">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 text-purple-300 transition-all hover:bg-purple-800 hover:text-white"
                                aria-label={`View ${project.title} live demo`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                            </a>
                        )}
                        {project.gitUrl && (
                            <a
                                href={project.gitUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700/50 text-gray-300 transition-all hover:bg-gray-600 hover:text-white"
                                aria-label={`View ${project.title} source code`}
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-sm text-gray-400 line-clamp-3">
                    {project.description}
                </p>
            </div>
        </article>
    );
});