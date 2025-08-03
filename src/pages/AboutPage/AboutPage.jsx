import React from "react"
import Header from "../shared/Header"
import Footer from "../shared/Footer"

export default function AboutPage() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["TypeScript Lua", "Python JavaScript"],
        },
        {
            title: "Other",
            skills: ["HTML CSS EJS SCSS", "REST JinJa"],
        },
        {
            title: "Tools",
            skills: ["VSCode Neovim Linux", "Figma XFCE Arch", "Git Font Awesome", "KDE fish"],
        },
        {
            title: "Databases",
            skills: ["SQLite PostgreSQL", "Mongo"],
        },
        {
            title: "Frameworks",
            skills: ["React Vue", "Disnake Discord.js", "Flask Express.js"],
        },
    ]

    const funFacts = [
        "I like winter more than summer",
        "I often bike with my friends",
        "I like pizza and pasta",
        "I was in Egypt, Poland and Turkey",
        "My favorite movie is The Green Mile",
        "I am still in school",
        "I don't have any siblings",
    ]

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Header />
            <main className="container mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        <span className="text-purple-400">/</span>about-me
                    </h1>
                    <p className="text-gray-400">Who am I?</p>
                </div>

                {/* Decorative dots - left side */}
                <div className="absolute left-4 top-80 grid grid-cols-3 gap-1">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    ))}
                </div>

                {/* About Me Section */}
                <section className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">Hello, i'm Elias!</p>

                            <p className="text-gray-400 leading-relaxed">
                                I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                                scratch and raise them into modern user-friendly web experiences.
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                                been helping various clients to establish their presence online. I always strive to learn about the
                                newest technologies and frameworks.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Decorative dots - top right */}
                            <div className="absolute -top-8 right-0 grid grid-cols-5 gap-1">
                                {Array.from({ length: 25 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                ))}
                            </div>

                            {/* Decorative dots - bottom right */}
                            <div className="absolute -bottom-8 right-8 grid grid-cols-5 gap-1">
                                {Array.from({ length: 25 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                ))}
                            </div>

                            {/* Figure illustration */}
                            <div className="flex justify-center">
                                <div className="w-80 h-96 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg relative overflow-hidden border border-gray-600">
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-900"></div>

                                    {/* Simple figure representation - hooded person with hand gesture */}
                                    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                                        {/* Head/Hood */}
                                        <div className="w-20 h-24 bg-gray-800 rounded-t-full relative">
                                            <div className="absolute inset-2 bg-gray-900 rounded-t-full"></div>
                                        </div>
                                    </div>

                                    {/* Hand gesture */}
                                    <div className="absolute bottom-40 right-20 w-8 h-12 bg-orange-400 rounded-lg transform rotate-12"></div>

                                    {/* Body */}
                                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-gray-800 rounded-t-3xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-12">
                        <span className="text-purple-400">#</span>skills
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="border border-gray-600 bg-gray-800">
                                <div className="bg-gray-700 px-4 py-3 border-b border-gray-600">
                                    <h3 className="font-semibold text-white">{category.title}</h3>
                                </div>
                                <div className="p-4 space-y-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="text-gray-400 text-sm leading-relaxed">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Decorative elements - right side */}
                <div className="absolute right-4 top-[600px] grid grid-cols-3 gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    ))}
                </div>

                {/* Fun Facts Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-12">
                        <span className="text-purple-400">#</span>my-fun-facts
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
                        {funFacts.map((fact, index) => (
                            <div
                                key={index}
                                className="border border-gray-600 bg-gray-800 p-4 hover:border-purple-400 transition-colors group"
                            >
                                <p className="text-gray-300 text-sm group-hover:text-white transition-colors">{fact}</p>
                            </div>
                        ))}
                    </div>

                    {/* Decorative geometric shapes */}
                    <div className="absolute right-8 bottom-40">
                        <div className="relative">
                            <div className="w-16 h-16 border-2 border-purple-400 bg-transparent"></div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-purple-400 bg-transparent"></div>
                        </div>
                    </div>
                </section>

                {/* Bottom decorative dots */}
                <div className="absolute right-4 bottom-32 grid grid-cols-5 gap-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    ))}
                </div>

                {/* Left side decorative elements */}
                <div className="absolute left-8 bottom-20">
                    <div className="w-12 h-12 border-2 border-gray-600"></div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
