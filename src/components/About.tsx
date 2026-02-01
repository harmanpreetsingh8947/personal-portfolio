'use client';

import Image from 'next/image';
import { Code2, Briefcase, Users } from 'lucide-react';
import profileImage from '../../public/profile.png';

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 relative">
            <div className="container mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                        style={{ background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent-primary)' }}
                    >
                        About Me
                    </span>
                    <h2 className="section-title">
                        Who <span className="gradient-text">I Am</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Get to know the person behind the code
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="">
                            <Image
                                src={profileImage}
                                alt="Profile"
                                width={500}
                                height={500}
                                className="rounded-2xl object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 order-1 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                            Passionate about creating{' '}
                            <span className="gradient-text">impactful</span> digital experiences
                        </h3>

                        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            I am a Full Stack Developer with expertise in Python, AWS, React and Next.js,
                            delivering scalable and efficient web applications. Skilled in both front-end
                            and back-end development, cloud integration, and optimizing user experiences.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Currently working as a Full Stack Developer and Team Lead at IODataLabs,
                            focusing on React (TypeScript) and Python to deliver secure, scalable
                            solutions while overseeing team efforts.
                        </p>

                        <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4">
                            <div className="glass-card p-4 text-center">
                                <Code2 className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" style={{ color: 'var(--accent-primary)' }} />
                                <div className="text-xl md:text-2xl font-bold gradient-text">5+</div>
                                <div className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>Years</div>
                            </div>
                            <div className="glass-card p-4 text-center">
                                <Briefcase className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" style={{ color: 'var(--accent-tertiary)' }} />
                                <div className="text-xl md:text-2xl font-bold gradient-text">20+</div>
                                <div className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>Projects</div>
                            </div>
                            <div className="glass-card p-4 text-center">
                                <Users className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" style={{ color: 'var(--accent-pink)' }} />
                                <div className="text-xl md:text-2xl font-bold gradient-text">4</div>
                                <div className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>Companies</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
