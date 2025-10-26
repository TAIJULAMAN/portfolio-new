import React from "react"
import { useState, useMemo } from "react"
import { FaSearch, FaFilter } from "react-icons/fa"
import { ProjectCard } from "../Projects/ProjectCard"

import plate from "../../assets/plate.webp";
import dental from "../../assets/dental.webp";
import craft from "../../assets/craft.webp";

export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedFilter, setSelectedFilter] = useState("all")

    const completeApps = [
        {
            id: 1,
            title: "Craft UI",
            type: "library",
            category: "library",
            description: "Craft UI—an all-in-one frontend development toolkit, purpose-built to help you ship faster, design smarter, and code better.",
            tech: ["React", "Tailwind CSS", "Framer Motion"],
            image: craft,
            liveUrl: "https://craft-soft-ui.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/Craftysoft-Ui",
        },
        {
            id: 2,
            title: "Plate Exchange",
            type: "web",
            category: "web",
            description: "A web application for buying and selling UK number plates. This platform connects buyers and sellers in a secure marketplace environment with premium features and user dashboard functionality.",
            tech: ["React", "Tailwind CSS", "Redux Toolkit"],
            image: plate,
            liveUrl: "https://plate-exchange-website.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/mandhirhothi-web",
        },
        {
            id: 3,
            title: "Dental Ecommerce",
            type: "design",
            category: "design",
            description: "A modern dental equipment and supplies ecommerce platform. This platform serves dental professionals with a wide range of products, from dental instruments to pharmaceuticals.",
            tech: ["React", "Tailwind CSS"],
            image: dental,
            liveUrl: "https://dental-ecommerce-website.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/dental-ecommerce-web",
        },
    ]

    const smallProjects = [
        {
            id: 1,
            title: "Saloon Dashboard",
            category: "design",
            description: "A modern saloon based web dashboard for managing customers,services,bookings and transaction.",
            tech: ["Next.js", "TypeScript"],
            liveUrl: "https://okjeri-dashboard.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/saloon-dashboard",
        },
        {
            id: 2,
            title: "Research Website",
            category: "design",
            description: "A website based consulting and R&D firm specializing in energy, climate change, nature-based solutions, blue economy, and AI-powered resilience data analytics.",
            tech: ["Next.js", "TypeScript"],
            liveUrl: "https://research-website-mu.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/research-website",
        },
        {
            id: 3,
            title: "FanLnk",
            category: "design",
            description: "A application designed to facilitate content creation and management.",
            tech: ["Next.js", "TypeScript"],
            liveUrl: "https://content-creator-web.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/content-creator-web",
        },
        {
            id: 4,
            title: "jaykou",
            category: "design",
            description: "A recipe and meal-planning web app. It features browsing recipes, viewing recipe details, managing a personal profile with favorites and your own recipes.",
            tech: ["React", "JavaScript", "Radix Ui"],
            liveUrl: "https://jaykou-website.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/cook-book-website",
        },

    ]


    const categories = [
        { value: "all", label: "All" },
        { value: "web", label: "Web" },
        { value: "library", label: "library" },
        { value: "design", label: "design" },
    ]

    const filteredCompleteApps = useMemo(() => {
        return completeApps.filter((project) => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                String(Array.isArray(project.tech) ? project.tech.join(" ") : project.tech || "").toLowerCase().includes(searchTerm.toLowerCase())
            const matchesFilter = selectedFilter === "all" || project.category === selectedFilter
            return matchesSearch && matchesFilter
        })
    }, [searchTerm, selectedFilter])

    const filteredSmallProjects = useMemo(() => {
        return smallProjects.filter((project) => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.tech.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesFilter = selectedFilter === "all" || project.category === selectedFilter
            return matchesSearch && matchesFilter
        })
    }, [searchTerm, selectedFilter])

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <main className="container mx-auto px-5 md:px-0 py-10">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        <span className="text-purple-400">/</span>projects
                    </h1>
                    <p className="text-gray-400">List of my projects</p>
                </div>

                {/* Search and Filter Controls */}
                <div className="mb-8 flex flex-col md:flex-row gap-4">
                    {/* Search Bar */}
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-600 rounded px-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                        />
                    </div>

                    {/* Filter Dropdown */}
                    <div className="relative">
                        <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <select
                            value={selectedFilter}
                            onChange={(e) => setSelectedFilter(e.target.value)}
                            className="bg-gray-800 border border-gray-600 rounded px-10 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors appearance-none cursor-pointer min-w-[150px]"
                        >
                            {categories.map((category) => (
                                <option key={category.value} value={category.value}>
                                    {category.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>


                {/* Decorative dots */}
                <div className="absolute left-4 top-64 grid grid-cols-3 gap-1">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    ))}
                </div>

                {/* Complete Apps Section */}
                {filteredCompleteApps.length > 0 && (
                    <section className="mb-16">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCompleteApps.map((project, index) => {
                                const normalized = {
                                    title: project.title,
                                    description: project.description,
                                    tech: Array.isArray(project.tech) ? project.tech : String(project.tech || "").split(" ").filter(Boolean),
                                    image: project.image || "/placeholder.svg",
                                    liveUrl: project.liveUrl ?? (project.buttons || []).find(b => /live/i.test(b.label))?.url,
                                    gitUrl: project.gitUrl ?? (project.buttons || []).find(b => /github/i.test(b.label))?.url,
                                };
                                return (

                                    <div key={index} className="relative">
                                        {project.type && (
                                            <span className="absolute right-3 top-3 z-10 rounded-full border border-purple-400/30 bg-purple-900 px-3 py-1 text-xs font-medium text-purple-200 backdrop-blur-sm">
                                                {project.type}
                                            </span>
                                        )}
                                        <ProjectCard project={normalized} />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Decorative elements */}
                <div className="absolute right-4 top-96 w-16 h-16 border-2 border-gray-600"></div>
                <div className="absolute right-24 bottom-96 grid grid-cols-5 gap-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    ))}
                </div>

                {/* Small Projects Section */}
                {filteredSmallProjects.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">
                            <span className="text-purple-400">#</span>more-projects
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredSmallProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-600 bg-gray-800 p-4 hover:border-purple-400 transition-colors group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex flex-wrap gap-2">
                                            {(Array.isArray(project.tech) ? project.tech : String(project.tech || "").split(" ").filter(Boolean)).slice(0,3).map((tech, i) => (
                                                <span key={i} className="rounded-full bg-purple-900/80 px-3 py-1 text-xs font-medium text-purple-200 backdrop-blur-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                            {!Array.isArray(project.tech) && String(project.tech || "").split(" ").filter(Boolean).length > 3 && (
                                                <span className="rounded-full bg-purple-900/80 px-3 py-1 text-xs font-medium text-purple-200 backdrop-blur-sm">+ more</span>
                                            )}
                                        </div>
                                        <div className="bg-gray-700 px-2 py-1 rounded text-xs text-purple-400">{project.category}</div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex gap-2">
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
                            ))}
                        </div>
                    </section>
                )}

                {/* No Results Message */}
                {filteredCompleteApps.length === 0 && filteredSmallProjects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                        <p className="text-gray-400 mb-4">Try adjusting your search terms or filters</p>
                        <button
                            onClick={() => {
                                setSearchTerm("")
                                setSelectedFilter("all")
                            }}
                            className="border border-purple-400 text-purple-400 px-6 py-3 hover:bg-purple-400 hover:text-white transition-colors"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                {/* Bottom decorative elements */}
                <div className="absolute left-8 bottom-32 grid grid-cols-3 gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    ))}
                </div>
            </main>
        </div>
    )
}
