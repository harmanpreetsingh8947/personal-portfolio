'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 md:py-4' : 'py-4 md:py-6'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold relative group"
        >
          <span className="gradient-text">HS</span>
          <span
            className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
            style={{ background: 'var(--gradient-primary)' }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[rgba(139,92,246,0.1)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="relative z-10 hover:text-[var(--text-primary)] transition-colors">
                {link.name}
              </span>
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              background: 'var(--gradient-primary)',
              color: 'white'
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
          style={{
            color: 'var(--text-primary)',
            background: isMobileMenuOpen ? 'rgba(139, 92, 246, 0.15)' : 'transparent'
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        style={{ background: 'var(--bg-primary)' }}
      >
        <div
          className="mx-4 my-4 p-4 rounded-2xl"
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)'
          }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-3 rounded-xl text-base font-medium transition-all"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-4 py-3 rounded-xl text-base font-semibold text-center"
              style={{
                background: 'var(--gradient-primary)',
                color: 'white'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
