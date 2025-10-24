import React from "react"
import { useState, useMemo } from "react"
import { FaSearch, FaFilter } from "react-icons/fa"
import { ProjectCard } from "../Projects/ProjectCard"

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
            image: "/craft.png",
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
            image: "/plate.png",
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
            image: "/dental.png",
            liveUrl: "https://dental-ecommerce-website.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/dental-ecommerce-web",
        },
    ]

    const smallProjects = [
        {
            title: "Bot boilerplate",
            description: "Start creating scalable discord.js bot with TypeScript template",
            tech: "Discord.js TS JS",
            category: "template",
            buttons: [{ label: "Github <~>", type: "primary", url: "https://github.com/elias/bot-boilerplate" }],
        },
        {
            title: "My blog",
            description: "Front-end of my future blog website written on Nuxt",
            tech: "VUE CSS JS",
            category: "web",
            buttons: [{ label: "Github <~>", type: "primary", url: "https://github.com/elias/blog" }],
        },
        {
            title: "Chess pro",
            description: "Figma landing page about service for viewing chess tournaments",
            tech: "Figma",
            category: "design",
            buttons: [{ label: "Figma <~>", type: "primary", url: "https://figma.com/chess-pro" }],
        },
        {
            title: "Crash protect website",
            description: "Figma template for website about anti-raid, anti-crash discord bot",
            tech: "Figma",
            category: "design",
            buttons: [{ label: "Figma <~>", type: "primary", url: "https://figma.com/crash-protect" }],
        },
        {
            title: "CSS experiments",
            description: "Collection of my different little projects on CSS",
            tech: "HTML CSS",
            category: "experiment",
            buttons: [{ label: "Live <~>", type: "primary", url: "https://codepen.io/elias/css-experiments" }],
        },
        {
            title: "Web Dev nvim config",
            description: "Config for neovim perfect for web developer",
            tech: "Lua NeoVim",
            category: "tool",
            buttons: [{ label: "Github <~>", type: "primary", url: "https://github.com/elias/nvim-config" }],
        },
        {
            title: "Ooku",
            description: "Simple link shortener with auth",
            tech: "Python Quart HTML",
            category: "tool",
            buttons: [{ label: "Live <~>", type: "primary", url: "https://ooku.dev" }],
        },
        {
            title: "School website",
            description: "Figma template website for my school",
            tech: "Figma",
            category: "design",
            buttons: [{ label: "Figma <~>", type: "primary", url: "https://figma.com/school-website" }],
        },
    ]

    // const allProjects = [...completeApps, ...smallProjects]

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
                                        <div className="text-sm text-gray-400">{project.tech}</div>
                                        <div className="bg-gray-700 px-2 py-1 rounded text-xs text-purple-400">{project.category}</div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.buttons.map((button, btnIndex) => (
                                            <a
                                                key={btnIndex}
                                                href={button.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="border border-purple-400 text-purple-400 px-4 py-2 text-sm hover:bg-purple-400 hover:text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25"
                                            >
                                                {button.label}
                                            </a>
                                        ))}
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
