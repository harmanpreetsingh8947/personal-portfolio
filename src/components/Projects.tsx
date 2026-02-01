'use client';

import { Github, ArrowUpRight, ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    gradient: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    githubUrlFrontend?: string;
    githubUrlBackend?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: 'Makes360',
        description: 'Developed a custom payment gateway for the Makes360 website and enhanced the user interface for a better user experience.',
        gradient: 'from-pink-500 to-rose-600',
        tags: ['Payment Gateway', 'UI/UX', 'Full Stack'],
        liveUrl: 'https://www.makes360.com/',
        featured: true,
    },
    {
        title: 'Chatbot System',
        description: 'Developed an AI chatbot platform combining Next.js 16, FastAPI, PostgreSQL, and OpenAI API, all containerized with Docker for seamless development and deployment.',
        gradient: 'from-pink-500 to-rose-600',
        tags: ['Chatbot', 'AI', 'Full Stack', 'Docker', 'OpenAI API', 'Next.js 16', 'FastAPI', 'PostgreSQL'],
        githubUrlFrontend: 'https://github.com/harmanpreetsingh8947/chatbot-frontend',
        githubUrlBackend: 'https://github.com/harmanpreetsingh8947/chatbot-backend',
        featured: true,
    },
    {
        title: 'IOPM (Input Output Project Manager)',
        description: 'Developed a project management platform for the Makes360 website and enhanced the user interface for a better user experience.',
        gradient: 'from-pink-500 to-rose-600',
        tags: ['Project Management', 'UI/UX', 'Full Stack'],
        githubUrlFrontend: 'https://github.com/harmanpreetsingh8947/chatbot-frontend',
        githubUrlBackend: 'https://github.com/harmanpreetsingh8947/chatbot-backend',
        featured: true,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 -translate-y-1/2"
                style={{ background: 'var(--accent-pink)' }}
            />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                        style={{ background: 'rgba(236, 72, 153, 0.15)', color: 'var(--accent-pink)' }}
                    >
                        Portfolio
                    </span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        A selection of my recent work and client projects
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={`${project.title}-${index}`}
                            className="glass-card overflow-hidden group relative"
                        >
                            <div className="p-5 md:p-6">
                                {project.featured && (
                                    <span
                                        className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                                        style={{ background: 'rgba(139, 92, 246, 0.2)', color: 'var(--accent-primary)' }}
                                    >
                                        Featured
                                    </span>
                                )}

                                <h3
                                    className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-[var(--accent-primary)] transition-colors"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {project.title}
                                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>

                                <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs rounded-full font-medium"
                                            style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-primary)' }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Links - visible on hover */}
                                <div className="flex items-center gap-3 pt-3 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all hover:scale-105"
                                            style={{
                                                background: 'var(--accent-primary)',
                                                color: 'white'
                                            }}
                                        >
                                            <ExternalLink size={14} />
                                            Live
                                        </a>
                                    )}
                                    {project?.githubUrl && project?.githubUrl !== '#' && (
                                        <a
                                            href={project?.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all hover:scale-105"
                                            style={{
                                                background: 'rgba(255,255,255,0.1)',
                                                color: 'var(--text-primary)'
                                            }}
                                        >
                                            <Github size={14} />
                                            Code
                                        </a>
                                    )}
                                    {project?.githubUrlFrontend && (
                                        <a
                                            href={project?.githubUrlFrontend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all hover:scale-105"
                                            style={{
                                                background: 'rgba(255,255,255,0.1)',
                                                color: 'var(--text-primary)'
                                            }}
                                        >
                                            <Github size={14} />
                                            Frontend
                                        </a>
                                    )}
                                    {project?.githubUrlBackend && (
                                        <a
                                            href={project?.githubUrlBackend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all hover:scale-105"
                                            style={{
                                                background: 'rgba(255,255,255,0.1)',
                                                color: 'var(--text-primary)'
                                            }}
                                        >
                                            <Github size={14} />
                                            Backend
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10 md:mt-14">
                    <a
                        href="https://github.com/harmanpreetsingh8947"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        <Github size={20} />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
