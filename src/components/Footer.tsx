'use client';

import { Github, Linkedin, Heart, Mail, ArrowUp } from 'lucide-react';

const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/harmanpreetsingh8947' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/harmanpreetsingh8947' },
    { name: 'Email', icon: Mail, href: 'mailto:harmanpreet.singh8947@gmail.com' },
];

const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="pt-16 pb-8 relative" style={{ background: 'var(--bg-secondary)' }}>
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-pink), transparent)' }}
            />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <a href="#home" className="text-2xl font-bold gradient-text inline-block mb-4">
                            Harmanpreet Singh
                        </a>
                        <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0" style={{ color: 'var(--text-secondary)' }}>
                            Full Stack Developer building scalable web applications with modern technologies.
                        </p>
                    </div>

                    <div className="text-center">
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: 'var(--accent-primary)' }}>
                            Quick Links
                        </h4>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm hover:text-[var(--accent-primary)] transition-colors"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-right">
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: 'var(--accent-primary)' }}>
                            Connect
                        </h4>
                        <div className="flex items-center justify-center md:justify-end gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    style={{
                                        background: 'rgba(139, 92, 246, 0.1)',
                                        border: '1px solid rgba(139, 92, 246, 0.2)',
                                        color: 'var(--text-secondary)'
                                    }}
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
