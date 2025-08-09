import React from "react"
import { useState, useMemo } from "react"
import { FaSearch, FaFilter } from "react-icons/fa"
import Footer from "../shared/Footer"
import Header from "../shared/Header"

export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedFilter, setSelectedFilter] = useState("all")

    const completeApps = [
        {
            title: "ChertNodes",
            description: "Minecraft servers hosting",
            tech: "HTML SCSS Python Flask",
            category: "web",
            image: "/placeholder.svg?height=200&width=300",
            buttons: [
                { label: "Live <~>", type: "primary", url: "https://chertnodes.com" },
                { label: "Cached >", type: "secondary", url: "#" },
            ],
        },
        {
            title: "Kahoot Answers Viewer",
            description: "Get answers to your kahoot quiz",
            tech: "CSS Express Node.js",
            category: "tool",
            image: "/placeholder.svg?height=200&width=300",
            buttons: [{ label: "Live <~>", type: "primary", url: "#" }],
        },
        {
            title: "ProtectX",
            description: "Discord anti-crash bot",
            tech: "React Express Discord.js Node.js",
            category: "bot",
            image: "/placeholder.svg?height=200&width=300",
            buttons: [{ label: "Cached >", type: "secondary", url: "#" }],
        },
        {
            title: "Kotik Bot",
            description: "Multi-functional discord bot",
            tech: "HTML CSS JS",
            category: "bot",
            image: "/placeholder.svg?height=200&width=300",
            buttons: [{ label: "Live <~>", type: "primary", url: "#" }],
        },
        {
            title: "Portfolio",
            description: "You're using it right now",
            tech: "Vue TS Less",
            category: "web",
            image: "/placeholder.svg?height=200&width=300",
            buttons: [{ label: "Github <~>", type: "primary", url: "https://github.com/elias/portfolio" }],
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
        { value: "bot", label: "Bots" },
        { value: "tool", label: "Tools" },
        { value: "design", label: "Design" },
        { value: "template", label: "Templates" },
        { value: "experiment", label: "Experiments" },
    ]

    const filteredCompleteApps = useMemo(() => {
        return completeApps.filter((project) => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.tech.toLowerCase().includes(searchTerm.toLowerCase())
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

                {/* Results Counter */}
                <div className="mb-6 text-gray-400 text-sm">
                    Found {filteredCompleteApps.length + filteredSmallProjects.length} projects
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
                        <h2 className="text-3xl font-bold mb-8">
                            <span className="text-purple-400">#</span>complete-apps
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCompleteApps.map((project, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-600 bg-gray-800 hover:border-purple-400 transition-colors group"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-48 object-cover bg-gray-700 group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-75 px-2 py-1 rounded text-xs text-purple-400">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-sm text-gray-400 mb-2">{project.tech}</div>
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
                                                    className={`px-4 py-2 text-sm border transition-all duration-200 hover:scale-105 ${button.type === "primary"
                                                        ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-400/25"
                                                        : "border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black"
                                                        }`}
                                                >
                                                    {button.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                            <span className="text-purple-400">#</span>small-projects
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
