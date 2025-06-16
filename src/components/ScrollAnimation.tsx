"use client";

import { useEffect } from 'react';

export default function ScrollAnimation() {
  useEffect(() => {
    // Fungsi untuk mendeteksi elemen saat di-scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.section-animate');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);
    
    // Panggil sekali saat komponen dimuat untuk elemen yang sudah terlihat
    handleScroll();
    
    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return null;
}