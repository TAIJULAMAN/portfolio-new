import React from 'react';
export default function Projects() {
    const projects = [
        {
            title: "ChertNodes",
            description: "Minecraft servers hosting",
            tech: "HTML SCSS Python Flask",
            image: "/placeholder.svg?height=200&width=300",
            liveUrl: "#",
            cacheUrl: "#",
        },
        {
            title: "ProtectX",
            description: "Discord anti-crash bot",
            tech: "React Express Discord.js Node.js HTML SCSS Python Flask",
            image: "/placeholder.svg?height=200&width=300",
            liveUrl: "#",
        },
        {
            title: "Kahoot Answers Viewer",
            description: "Get answers to your kahoot quiz",
            tech: "CSS Express Node.js",
            image: "/placeholder.svg?height=200&width=300",
            liveUrl: "#",
        },
    ]
    return (
        <section id="works" className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold">
                    <span className="text-purple-400">#</span>projects
                </h2>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    View all ~~&gt;
                </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-600 bg-gray-800">
                        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <div className="text-sm text-gray-400 mb-2">{project.tech}</div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex space-x-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        className="border border-purple-400 text-purple-400 px-4 py-2 text-sm hover:bg-purple-400 hover:text-white transition-colors"
                                    >
                                        Live &lt;~&gt;
                                    </a>
                                )}
                                {project.cacheUrl && (
                                    <a
                                        href={project.cacheUrl}
                                        className="border border-gray-400 text-gray-400 px-4 py-2 text-sm hover:bg-gray-400 hover:text-black transition-colors"
                                    >
                                        Cached &gt;
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}