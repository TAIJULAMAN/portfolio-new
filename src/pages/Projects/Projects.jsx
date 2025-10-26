import React, { useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import plate from "../../assets/plate.webp";
import dental from "../../assets/dental.webp";
import craft from "../../assets/craft.webp";
import { Link } from 'react-router-dom';

const PROJECTS_DATA = [
    {
        id: 1,
        title: "Craft UI",
        type: "library",
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
        description: "A modern dental equipment and supplies ecommerce platform. This platform serves dental professionals with a wide range of products, from dental instruments to pharmaceuticals.",
        tech: ["React", "Tailwind CSS"],
        image: dental,
        liveUrl: "https://dental-ecommerce-website.vercel.app/",
        gitUrl: "https://github.com/TAIJULAMAN/dental-ecommerce-web",
    },
];



export default function Projects() {
    const projects = useMemo(() => PROJECTS_DATA, []);

    return (
        <section
            className="relative overflow-hidden py-10 md:py-20"
        >
            <div className="container relative mx-auto px-5 md:px-0">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold">
                        <span className="text-purple-400">#</span>projects
                    </h2>
                    <Link to="/projects" className="text-white hover:text-purple-400 transition-colors">
                        View all ~~&gt;
                    </Link>
                </div>
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.id} className="relative">
                            {project.type && (
                                <span className="absolute right-3 top-3 z-10 rounded-full border border-purple-400/30 bg-purple-900 px-3 py-1 text-xs font-medium text-purple-200 backdrop-blur-sm">
                                    {project.type}
                                </span>
                            )}
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}