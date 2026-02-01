'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        // Complete loading after minimum time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500"
            style={{
                background: 'var(--bg-primary)',
                opacity: isLoading ? 1 : 0,
                pointerEvents: isLoading ? 'auto' : 'none'
            }}
        >
            {/* Logo/Name */}
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text animate-pulse">
                    HS
                </h1>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: 'var(--glass-border)' }}>
                <div
                    className="h-full transition-all duration-300 ease-out rounded-full"
                    style={{
                        width: `${Math.min(progress, 100)}%`,
                        background: 'var(--gradient-primary)'
                    }}
                />
            </div>

            {/* Loading text */}
            <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                Loading...
            </p>

            {/* Animated orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-64 h-64 rounded-full blur-[100px] opacity-30 animate-pulse"
                    style={{
                        background: 'var(--accent-primary)',
                        top: '20%',
                        left: '20%'
                    }}
                />
                <div
                    className="absolute w-48 h-48 rounded-full blur-[80px] opacity-20 animate-pulse"
                    style={{
                        background: 'var(--accent-pink)',
                        bottom: '30%',
                        right: '25%',
                        animationDelay: '0.5s'
                    }}
                />
            </div>
        </div>
    );
}
