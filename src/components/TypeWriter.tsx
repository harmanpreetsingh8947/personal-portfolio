'use client';

import { useState, useEffect } from 'react';

const roles = [
    'Full Stack Developer',
    'Cloud Engineer',
    'Python Expert',
    'React Specialist',
    'Problem Solver'
];

export default function TypeWriter() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (currentText.length < currentRole.length) {
                    setCurrentText(currentRole.slice(0, currentText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentRoleIndex]);

    return (
        <span className="gradient-text">
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    );
}
