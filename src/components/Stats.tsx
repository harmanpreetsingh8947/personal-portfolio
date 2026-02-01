'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, Code2, Users, Award } from 'lucide-react';

const stats = [
    {
        icon: Briefcase,
        value: 3,
        suffix: '+',
        label: 'Years Experience',
        color: '#8b5cf6'
    },
    {
        icon: Code2,
        value: 20,
        suffix: '+',
        label: 'Projects Completed',
        color: '#ec4899'
    },
    {
        icon: Users,
        value: 10,
        suffix: '+',
        label: 'Happy Clients',
        color: '#06b6d4'
    },
    {
        icon: Award,
        value: 5,
        suffix: '+',
        label: 'Certifications',
        color: '#f59e0b'
    },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
            {count}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-16 md:py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)',
                    height: '1px',
                    top: '50%'
                }}
            />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="glass-card p-6 md:p-8 text-center group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div
                                    className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    style={{ background: `${stat.color}20` }}
                                >
                                    <IconComponent
                                        className="w-7 h-7"
                                        style={{ color: stat.color }}
                                    />
                                </div>
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                <p className="mt-2 text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
