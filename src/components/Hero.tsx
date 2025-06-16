"use client";

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <section className="hero text-black dark:text-white section-animate" id="beranda" aria-label="Pesona Yogyakarta">
      <div className="hero-inner container">
        <AnimatedSection className="hero-text section-animate">
          <h1>Pesona <span className="highlight">Yogyakarta</span></h1>
          <p className="text-black dark:text-gray-300">Jelajahi keindahan alam, budaya, dan kuliner khas Jogja yang menakjubkan. Temukan pengalaman wisata tak terlupakan di kota istimewa ini.</p>
          <button aria-label="Jelajahi Sekarang" className="text-white dark:text-white">Jelajahi Sekarang</button>
        </AnimatedSection>
        <AnimatedSection className="hero-images section-animate" delay={300} aria-hidden="true">
          <Image 
            src="/images/borobudur.jpg" 
            alt="Candi Borobudur" 
            width={320} 
            height={440} 
            priority
          />
          <Image 
            src="/images/keraton.webp" 
            alt="Keraton Yogyakarta" 
            width={220} 
            height={320}
          />
          <Image 
            src="/images/malioboro.png" 
            alt="Jalan Malioboro" 
            width={160} 
            height={240}
          />
        </AnimatedSection>
      </div>
    </section>
  );
}