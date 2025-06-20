"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-[#3a1e00] dark:bg-gray-900">
      <div className="footer-container container text-[#f2e6d9] dark:text-gray-300">
        <section className="footer-section" aria-labelledby="footer-about-title">
          <h4 id="footer-about-title" className="text-[#f7e9d5] dark:text-white">Tentang Kami</h4>
          <Link href="#" tabIndex={0}>Profil</Link>
          <Link href="#" tabIndex={0}>Kontak</Link>
          <Link href="#" tabIndex={0}>FAQ</Link>
        </section>
        
        <section className="footer-section" aria-labelledby="footer-destinations-title">
          <h4 id="footer-destinations-title" className="text-[#f7e9d5] dark:text-white">Destinasi</h4>
          <Link href="#" tabIndex={0}>Candi</Link>
          <Link href="#" tabIndex={0}>Pantai</Link>
          <Link href="#" tabIndex={0}>Gunung</Link>
        </section>
        
        <section className="footer-section" aria-labelledby="footer-resources-title">
          <h4 id="footer-resources-title" className="text-[#f7e9d5] dark:text-white">Informasi</h4>
          <Link href="#" tabIndex={0}>Panduan Wisata</Link>
          <Link href="#" tabIndex={0}>Blog</Link>
          <Link href="#" tabIndex={0}>Peta Wisata</Link>
        </section>
      </div>
      
      <div className="footer-bottom text-[#bfb799] dark:text-gray-400">© {new Date().getFullYear()} Wisata Jogja. All rights reserved.</div>
    </footer>
  );
}