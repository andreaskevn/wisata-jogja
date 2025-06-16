"use client";

import Image from 'next/image';
import { useEffect } from 'react';

// Definisi animasi CSS
const fadeInAnimation = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}
`;

const stories = [
  {
    id: 1,
    title: 'Pesona Wisata Kuliner Yogyakarta: 10 Makanan Khas yang Wajib Dicoba',
    excerpt: 'Dari gudeg hingga bakpia, temukan kuliner khas Yogyakarta yang akan memanjakan lidah Anda selama berkunjung ke kota istimewa ini.',
    image: '/images/gudeg.jpg',
    date: '12 Mei 2024'
  },
  {
    id: 2,
    title: '5 Pasar Tradisional Terbaik di Yogyakarta',
    excerpt: 'Jelajahi pasar tradisional terbaik di Yogyakarta',
    image: '/images/malioboro.png',
    date: '5 Mei 2024'
  },
  {
    id: 3,
    title: 'Panduan Menginap di Yogyakarta: Hotel Terbaik untuk Setiap Budget',
    excerpt: 'Temukan akomodasi terbaik di Yogyakarta',
    image: '/images/keraton.webp',
    date: '28 April 2024'
  },
  {
    id: 4,
    title: 'Wisata Yogyakarta dengan Budget Terbatas: Tips dan Trik',
    excerpt: 'Panduan hemat untuk menjelajahi Yogyakarta',
    image: '/images/tamansari.jpg',
    date: '20 April 2024'
  }
];

export default function LatestStories() {
  // Menambahkan style untuk animasi
  useEffect(() => {
    // Menambahkan style ke head
    const styleEl = document.createElement('style');
    styleEl.innerHTML = fadeInAnimation;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.story-item');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="latest-stories text-black dark:text-white" id="artikel" aria-labelledby="latest-stories-title">
      <h2 className="section-title text-black dark:text-white" id="latest-stories-title">Artikel Terbaru</h2>
      
      <div className="stories-grid">
        <article className="main-story story-item opacity-0" tabIndex={0} aria-label={stories[0].title}>
          <Image 
            src={stories[0].image} 
            alt={stories[0].title} 
            width={600} 
            height={240}
          />
          <div className="main-story-content">
            <h3 className="text-black dark:text-white">{stories[0].title}</h3>
            <p className="text-black dark:text-gray-200">{stories[0].excerpt}</p>
            <time dateTime="2024-05-12" className="text-gray-600 dark:text-gray-400">{stories[0].date}</time>
          </div>
        </article>
        
        <aside className="side-stories">
          {stories.slice(1).map((story, index) => (
            <article 
              key={story.id} 
              className="side-story story-item opacity-0" 
              style={{ animationDelay: `${index * 0.2}s` }}
              tabIndex={0} 
              aria-label={story.title}
            >
              <Image 
                src={story.image} 
                alt={story.title} 
                width={96} 
                height={70}
              />
              <div className="side-story-content">
                <h4 className="text-black dark:text-white">{story.title}</h4>
                <time dateTime="2024-05-05" className="text-gray-600 dark:text-gray-400">{story.date}</time>
              </div>
            </article>
          ))}
          <button className="explore-button text-black dark:text-white story-item opacity-0" aria-label="Baca artikel lainnya" style={{marginTop: '16px', width: '100%'}}>
            Baca artikel lainnya
          </button>
        </aside>
      </div>
    </section>
  );
}