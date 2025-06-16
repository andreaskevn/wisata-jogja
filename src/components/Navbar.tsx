"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Menambahkan event listener untuk menutup navbar saat klik di luar
    const handleClickOutside = (event: MouseEvent) => {
      const mobileNav = document.getElementById('mobile-menu');
      if (mobileMenuOpen && mobileNav && !mobileNav.contains(event.target as Node) && 
          !(event.target as Element).classList.contains('mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    // Mengatur overflow body saat navbar mobile terbuka
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header aria-label="Main navigation" className="bg-white dark:bg-gray-900">
      <div className="header-inner container">
        <div
          className="logo text-black dark:text-white"
          aria-label="Wisata Jogja logo"
          tabIndex={0}
        >
          WISATA JOGJA
        </div>
        <nav className="desktop-nav" role="navigation" aria-label="Primary">
          <Link
            href="#beranda"
            tabIndex={0}
            className="text-black dark:text-white"
          >
            Beranda
          </Link>
          <Link
            href="#destinasi"
            tabIndex={0}
            className="text-black dark:text-white"
          >
            Destinasi
          </Link>
          <Link
            href="#kuliner"
            tabIndex={0}
            className="text-black dark:text-white"
          >
            Kuliner
          </Link>
          <Link
            href="#budaya"
            tabIndex={0}
            className="text-black dark:text-white"
          >
            Budaya
          </Link>
          <Link
            href="#tentang-kami"
            tabIndex={0}
            className="text-black dark:text-white"
          >
            Tentang Kami
          </Link>
          <DarkModeToggle />
        </nav>
        <button
          className="mobile-menu-button"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          tabIndex={0}
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="material-icons" aria-hidden="true">
            menu
          </span>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-100" aria-hidden="true"></div>
      )}
      <nav
        className={`mobile-nav ${
          mobileMenuOpen ? "open" : ""
        } bg-white dark:bg-gray-800`}
        id="mobile-menu"
        aria-label="Mobile primary"
        role="navigation"
      >
        <div className="flex justify-between items-center mb-6">
          <DarkModeToggle />
          <button
            className="close-button"
            aria-label="Close menu"
            tabIndex={0}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="material-icons" aria-hidden="true">
              close
            </span>
          </button>
        </div>
        <Link
          href="#beranda"
          tabIndex={0}
          onClick={() => setMobileMenuOpen(false)}
          className="text-black dark:text-white"
        >
          Beranda
        </Link>
        <Link
          href="#destinasi"
          tabIndex={0}
          onClick={() => setMobileMenuOpen(false)}
          className="text-black dark:text-white"
        >
          Destinasi
        </Link>
        <Link
          href="#kuliner"
          tabIndex={0}
          onClick={() => setMobileMenuOpen(false)}
          className="text-black dark:text-white"
        >
          Kuliner
        </Link>
        <Link
          href="#budaya"
          tabIndex={0}
          onClick={() => setMobileMenuOpen(false)}
          className="text-black dark:text-white"
        >
          Budaya
        </Link>
        <Link
          href="#tentang-kami"
          tabIndex={0}
          onClick={() => setMobileMenuOpen(false)}
          className="text-black dark:text-white"
        >
          Tentang Kami
        </Link>
      </nav>
    </header>
  );
}
