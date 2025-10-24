import React from 'react';
export default function Skills() {
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
            skills: ["VSCode", "Figma", "Git", "Canva"],
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
            skills: ["React", " Redux"],
        }
    ]
    return (
        <section id="skills" className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-12">
                <span className="text-purple-400">#</span>skills
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Decorative elements */}
                <div className="hidden lg:block relative">
                    <div className="absolute top-0 left-0 w-16 h-16 border-2 border-gray-600"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-gray-600"></div>
                </div>

                <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="border border-gray-600">
                            <div className="bg-gray-800 px-4 py-2 border-b border-gray-600">
                                <h3 className="font-semibold text-white">{category.title}</h3>
                            </div>
                            <div className="p-4 space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="text-gray-400 text-sm">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}