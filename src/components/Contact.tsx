'use client';

import { useState } from 'react';
import { Send, Mail, Loader2, Linkedin, Github, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

// Simple validation helpers
const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateName = (name: string): boolean => {
    return name.trim().length >= 2;
};

const validateSubject = (subject: string): boolean => {
    return subject.trim().length >= 3;
};

const validateMessage = (message: string): boolean => {
    return message.trim().length >= 10;
};

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'loading'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!validateName(formData.name)) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!validateSubject(formData.subject)) {
            newErrors.subject = 'Subject must be at least 3 characters';
        }

        if (!validateMessage(formData.message)) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            toast.success('Message sent successfully! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setErrors({});
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Something went wrong';
            toast.error(message);
        } finally {
            setStatus('idle');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: undefined });
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'Harmanpreet Singh',
            href: 'mailto:harmanpreet.singh8947@gmail.com',
            color: '#8b5cf6'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Harmanpreet Singh',
            href: 'https://www.linkedin.com/in/harmanpreet-singh-b72617220/',
            color: '#0077b5'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'Harmanpreet Singh',
            href: 'https://github.com/harmanpreetsingh8947',
            color: '#333333'
        },
    ];

    return (
        <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
            {/* Background decoration */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-15"
                style={{ background: 'var(--gradient-primary)' }}
            />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                        style={{ background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent-primary)' }}
                    >
                        Contact
                    </span>
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Have a project in mind? Let&apos;s work together to create something amazing
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Contact Info - 2 columns */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass-card p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))' }}
                                >
                                    <MessageSquare className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Let&apos;s Talk</h3>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>I&apos;d love to hear from you</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {contactMethods.map((method) => (
                                    <a
                                        key={method.label}
                                        href={method.href}
                                        target={method.href.startsWith('mailto') ? undefined : '_blank'}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] group"
                                        style={{
                                            background: 'var(--glass-bg)',
                                            border: '1px solid var(--glass-border)'
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                                            style={{ background: `${method.color}20` }}
                                        >
                                            <method.icon className="w-5 h-5" style={{ color: method.color }} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                                {method.label}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - 3 columns */}
                    <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card p-6 md:p-8 space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.name}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                                placeholder="Project inquiry"
                            />
                            {errors.subject && (
                                <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.subject}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && (
                                <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
