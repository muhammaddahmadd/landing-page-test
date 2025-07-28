"use client";

import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Logo = () => (
  <div className="flex items-center">
    <Image src="/images/logo.svg" alt="klipAI logo" width={100} height={100}  className="mr-2" priority />
  </div>
);

const navItems = [
  { label: 'What is KlipAi', href: '#' },
  { label: 'Send KlapAI', href: '#' },
  { label: 'AI Agent', href: '#' },
  { label: 'Testimonials', href: '#' },
  { label: 'Web3', href: '#' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-50 bg-black rounded-[15px] my-6 mx-auto max-w-[92vw] border border-neutral-800">
      <nav className="flex items-center justify-between px-3 sm:px-16 py-6">
        <Logo />
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-white text-lg font-normal">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="hover:text-green-400 transition-colors duration-150">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button asChild className="ml-4">
            <Link href="#">Login</Link>
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={32} color="#fff" />
        </button>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-end p-6 md:hidden">
            <button
              className="mb-8"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <ul className="flex flex-col gap-8 text-white text-xl font-normal w-full items-end">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-green-400 transition-colors duration-150" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full max-w-xs" onClick={() => setMenuOpen(false)}>
              <Link href="#">Login</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 