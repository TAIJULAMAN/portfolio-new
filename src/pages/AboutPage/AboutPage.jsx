import React from "react"
export default function AboutPage() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["TypeScript", "JavaScript"],
        },
        {
            title: "Databases",
            skills: ["MongoDB"],
        },
        {
            title: "Tools",
            skills: ["VSCode Figma", "Git", "Canva"],
        },
        {
            title: "Other",
            skills: ["HTML CSS Ant Design", "Tailwind CSS Bootstrap", "Material UI Shadcn UI"],
        },
        {
            title: "Frameworks",
            skills: ["Next.js", "Express.js", "Node.js"],
        },
        {
            title: "Library",
            skills: ["React"]
        }
    ]
    const funFacts = [
        "I like winter more than summer",
        "I like pizza and pasta",
        "My favorite movie is Soldier Boy",
        "I am still learning",
        "I want to be a full-stack developer",
        "I love to play cricket"
    ]

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
            <main className="container mx-auto px-5 md:px-0 py-10 md:py-20">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        <span className="text-purple-400">/</span>about-me
                    </h1>
                    <p className="text-gray-400">Who am I?</p>
                </div>

                {/* About Me Section */}
                <section className="mb-20 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-gray-400">Hello, i'm Aman!</p>

                            <p className="text-gray-400">
                                I'm a self-taught front-end developer based in Dhaka, Bangladesh, passionate about crafting responsive and interactive websites. I specialize in building modern, user-friendly web experiences from the ground up—focusing on clean code, performance, and seamless user interaction.
                            </p>

                            <p className="text-gray-400">
                                For over 2 years, I’ve been turning ideas into engaging digital experiences through clean, creative, and responsive web development. I’ve helped clients build their online presence from the ground up, and I’m always exploring the latest technologies and frameworks to stay ahead in the ever-evolving web landscape.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Figure illustration */}
                            <div className="relative">
                                <div className="relative z-10 flex justify-center">
                                    <div className="relative w-80 h-96 rounded-2xl overflow-hidden group">
                                        <img
                                            src="/aman.jpg"
                                            alt="Aman's Profile"
                                            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-purple-600 opacity-30 mix-blend-multiply" />
                                        {/* Decorative border and overlay */}
                                        <div className="absolute inset-0 border-4 border-purple-400/20 rounded-2xl m-2 transition-all duration-500 group-hover:border-purple-400/40 group-hover:m-1"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-20 overflow-hidden">
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

                {/* Fun Facts Section */}
                <section className="mb-16 overflow-hidden">
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
                </section>
            </main>
        </div>
    )
}
