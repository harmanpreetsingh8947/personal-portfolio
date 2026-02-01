'use client';

import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiPython,
    SiFastapi,
    SiGo,
    SiPostgresql,
    SiAmazonwebservices,
    SiDocker,
    SiGit,
    SiTailwindcss,
    SiMongodb
} from 'react-icons/si';

const skills = [
    { name: 'React.js', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Language' },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'Backend' },
    { name: 'Golang', icon: SiGo, color: '#00ADD8', category: 'Backend' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', category: 'Cloud' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-28 relative" style={{ background: 'var(--bg-secondary)' }}>
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20"
                    style={{ background: 'radial-gradient(circle, var(--accent-primary), transparent)' }}
                />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                        style={{ background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent-primary)' }}
                    >
                        Tech Stack
                    </span>
                    <h2 className="section-title">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        The tools and technologies I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {skills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                className="skill-card group cursor-pointer"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div
                                    className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        background: `${skill.color}15`,
                                        boxShadow: `0 0 0 0 ${skill.color}40`
                                    }}
                                >
                                    <IconComponent
                                        className="w-7 h-7 md:w-8 md:h-8 transition-all duration-300"
                                        style={{ color: skill.color }}
                                    />
                                </div>
                                <h3 className="font-semibold text-sm md:text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                                    {skill.name}
                                </h3>
                                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                    {skill.category}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Skills */}
                <div className="mt-12 md:mt-16 text-center">
                    <div className="glass-card inline-block px-6 md:px-10 py-4 md:py-5">
                        <p className="text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                            Also experienced with: <span style={{ color: 'var(--accent-primary)' }}>Microservices Architecture</span> • <span style={{ color: 'var(--accent-tertiary)' }}>REST APIs</span> • <span style={{ color: 'var(--accent-pink)' }}>CI/CD</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
