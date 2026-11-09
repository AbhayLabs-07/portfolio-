'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Engineering', href: '#engineering-lab' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-[#F4F1E8]/95 backdrop-blur-md border-b border-[#E2DDD1] shadow-[0_2px_12px_rgba(36,37,33,0.03)]'
            : 'bg-transparent border-b border-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo: Clean Abhay Vishwakarma without orange dot */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center group focus-visible:outline-[#E65B35]"
            aria-label="Abhay Vishwakarma — Home"
          >
            <span className="font-display text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#242521]">
              ABHAY VISHWAKARMA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-xs font-mono tracking-wider uppercase transition-colors relative py-1 focus-visible:outline-[#E65B35] ${
                    isActive ? 'text-[#242521] font-semibold' : 'text-[#77766F] hover:text-[#242521]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#E65B35]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[#242521] hover:text-[#E65B35] transition-colors focus-visible:outline-[#E65B35]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 bg-[#F4F1E8]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-10 px-8 transition-all duration-250 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="py-3 text-2xl font-display font-bold text-[#242521] hover:text-[#E65B35] border-b border-[#E2DDD1] transition-colors"
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="pt-6 border-t border-[#E2DDD1] flex items-center justify-between font-mono text-xs text-[#77766F]">
          <span>MUMBAI, INDIA</span>
          <span>ENGINEERING / AI / ROBOTICS</span>
        </div>
      </div>
    </>
  );
}
