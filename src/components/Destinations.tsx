"use client";

import { useState } from 'react';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    name: 'Candi Borobudur',
    location: 'Magelang',
    image: '/images/borobudur.jpg',
  },
  {
    id: 2,
    name: 'Keraton Yogyakarta',
    location: 'Yogyakarta',
    image: '/images/keraton.webp',
  },
  {
    id: 3,
    name: 'Pantai Parangtritis',
    location: 'Bantul',
    image: '/images/parangtritis.jpg',
  },
  {
    id: 4,
    name: 'Gunung Merapi',
    location: 'Sleman',
    image: '/images/merapi.jpg',
  }
];

export default function Destinations() {
  const [activeTab, setActiveTab] = useState('Populer');
  
  const tabs = ['Populer', 'Candi', 'Pantai', 'Alam', 'Semua Destinasi'];

  return (
    <section className="destinations section-animate" id="destinasi" aria-labelledby="destinations-title">
      <h2 className="section-title section-animate" id="destinations-title">Destinasi Wisata</h2>
      
      <div className="destination-tabs section-animate" role="tablist" aria-label="Filter destinasi wisata berdasarkan kategori">
        {tabs.map((tab) => (
          <button 
            key={tab}
            className={`destination-tab ${activeTab === tab ? 'active' : ''}`} 
            role="tab" 
            aria-selected={activeTab === tab} 
            tabIndex={0}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="destinations-grid" role="tabpanel">
        {destinations.map((destination, index) => (
          <article 
            key={destination.id} 
            className="destination-card section-animate" 
            style={{ animationDelay: `${index * 0.2}s` }}
            tabIndex={0} 
            aria-label={destination.name}
          >
            <Image 
              src={destination.image} 
              alt={destination.name} 
              width={220} 
              height={140}
            />
            <div className="destination-info">
              <h3 className="destination-name">{destination.name}</h3>
              <p className="destination-country">{destination.location}</p>
            </div>
          </article>
        ))}
      </div>
      
      <button className="explore-button section-animate" aria-label="Lihat semua destinasi">Lihat semua destinasi</button>
    </section>
  );
}