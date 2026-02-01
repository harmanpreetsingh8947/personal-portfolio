'use client';

import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="gradient-orb orb-1" />
            <div className="gradient-orb orb-2" />
            <div className="gradient-orb orb-3" />

            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto text-center relative z-10 px-4 py-4">
                <div
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 animate-slide-up border"
                    style={{
                        background: 'rgba(139, 92, 246, 0.1)',
                        borderColor: 'rgba(139, 92, 246, 0.3)',
                        animationDelay: '0.1s'
                    }}
                >
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Available for new opportunities</span>
                </div>

                <h1
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-2 animate-slide-up tracking-tight"
                    style={{ animationDelay: '0.2s', fontFamily: 'Outfit, sans-serif' }}
                >
                    <span className="gradient-text">HARMANPREET</span>
                </h1>
                <h1
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up tracking-tight"
                    style={{ animationDelay: '0.25s', fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
                >
                    SINGH
                </h1>

                <div
                    className="mb-6 animate-slide-up"
                    style={{ animationDelay: '0.3s' }}
                >
                    <span
                        className="inline-block px-6 py-2 rounded-full text-lg md:text-xl font-semibold"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))',
                            color: 'var(--accent-primary)',
                            border: '1px solid rgba(139, 92, 246, 0.3)'
                        }}
                    >
                        Full Stack Developer
                    </span>
                </div>

                <p
                    className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-slide-up leading-relaxed px-4"
                    style={{ animationDelay: '0.35s', color: 'var(--text-secondary)' }}
                >
                    Expert in <span style={{ color: 'var(--accent-primary)' }}>Python</span>, <span style={{ color: 'var(--accent-tertiary)' }}>AWS</span>, <span style={{ color: 'var(--accent-pink)' }}>React</span> and <span style={{ color: 'var(--accent-blue)' }}>Next.js</span>.
                    Building scalable, efficient web applications with modern cloud architecture.
                </p>

                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-slide-up px-4"
                    style={{ animationDelay: '0.4s' }}
                >
                    <a href="#projects" className="btn-primary flex items-center gap-2">
                        View My Work
                    </a>
                    <a href="#contact" className="btn-outline flex items-center gap-2">
                        Get In Touch
                    </a>
                </div>

                <div
                    className="flex items-center justify-center gap-5 animate-slide-up"
                    style={{ animationDelay: '0.5s' }}
                >
                    {[
                        { icon: Github, href: 'https://github.com/harmanpreetsingh8947', label: 'GitHub' },
                        { icon: Linkedin, href: 'https://linkedin.com/in/harmanpreetsingh8947', label: 'LinkedIn' },
                        { icon: Mail, href: 'mailto:harmanpreet.singh8947@gmail.com', label: 'Email' },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target={social.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            style={{
                                background: 'rgba(139, 92, 246, 0.1)',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                color: 'var(--text-secondary)'
                            }}
                            aria-label={social.label}
                        >
                            <social.icon size={20} className="hover:text-[var(--accent-primary)]" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
