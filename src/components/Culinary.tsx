"use client";

import Image from 'next/image';

const culinaryItems = [
  {
    id: 1,
    name: 'Gudeg',
    description: 'Makanan khas Yogyakarta yang terbuat dari nangka muda yang dimasak dengan santan',
    image: '/images/gudeg.jpg',
  },
  {
    id: 2,
    name: 'Bakpia',
    description: 'Kue dengan isian kacang hijau yang menjadi oleh-oleh khas Yogyakarta',
    image: '/images/bakpia.jpg',
  },
  {
    id: 3,
    name: 'Sate Klatak',
    description: 'Sate kambing khas Yogyakarta yang dimasak tanpa bumbu dengan tusukan besi',
    image: '/images/sate-klatak.jpg',
  },
  {
    id: 4,
    name: 'Mie Lethek',
    description: 'Mie tradisional yang terbuat dari tepung singkong dan tepung beras',
    image: '/images/mie-lethek.jpg',
  }
];

export default function Culinary() {
  return (
    <section className="destinations section-animate" id="kuliner" aria-labelledby="culinary-title">
      <h2 className="section-title section-animate" id="culinary-title">Kuliner Khas</h2>
      
      <div className="destination-tabs section-animate" role="tablist" aria-label="Filter kuliner berdasarkan kategori">
        <button className="destination-tab active" role="tab" aria-selected={true} tabIndex={0}>Populer</button>
        <button className="destination-tab" role="tab" aria-selected={false} tabIndex={0}>Makanan Berat</button>
        <button className="destination-tab" role="tab" aria-selected={false} tabIndex={0}>Camilan</button>
        <button className="destination-tab" role="tab" aria-selected={false} tabIndex={0}>Minuman</button>
        <button className="destination-tab" role="tab" aria-selected={false} tabIndex={0}>Semua Kuliner</button>
      </div>
      
      <div className="destinations-grid" role="tabpanel">
        {culinaryItems.map((item, index) => (
          <article 
            key={item.id} 
            className="destination-card section-animate" 
            style={{ animationDelay: `${index * 0.2}s` }}
            tabIndex={0} 
            aria-label={item.name}
          >
            <Image 
              src={item.image} 
              alt={item.name} 
              width={220} 
              height={140}
            />
            <div className="destination-info">
              <h3 className="destination-name">{item.name}</h3>
              <p className="destination-country">{item.description.split('.')[0]}</p>
            </div>
          </article>
        ))}
      </div>
      
      <button className="explore-button section-animate" aria-label="Jelajahi kuliner lainnya">Jelajahi kuliner lainnya</button>
    </section>
  );
}