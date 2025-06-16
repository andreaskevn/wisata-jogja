"use client";

import Navbar from '@/components/Navbar';
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Culinary from '@/components/Culinary';
import Culture from '@/components/Culture';
import LatestStories from '@/components/LatestStories';
import TrekkersHighlights from '@/components/TrekkersHighlights';
import Newsletter from '@/components/Newsletter';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  useEffect(() => {
    // Animasi scroll untuk semua elemen dengan kelas scroll-animate
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="text-black dark:text-white">
        <Hero />
        <Destinations />
        <Culinary />
        <Culture />
        <LatestStories />
        <TrekkersHighlights />
        <Newsletter />
        <AboutUs />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollAnimation />
    </>
  );
}