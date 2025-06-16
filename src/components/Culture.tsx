"use client";

import Image from 'next/image';

const cultureItems = [
  {
    id: 1,
    name: 'Tari Tradisional',
    description: 'Berbagai tarian tradisional yang menjadi warisan budaya Yogyakarta',
    image: '/images/tari.jpg',
  },
  {
    id: 2,
    name: 'Wayang Kulit',
    description: 'Seni pertunjukan wayang yang menggunakan bayangan boneka kulit',
    image: '/images/wayang.jpg',
  },
  {
    id: 3,
    name: 'Batik',
    description: 'Seni membuat pola pada kain dengan teknik perintang warna menggunakan malam',
    image: '/images/batik.jpg',
  },
  {
    id: 4,
    name: 'Upacara Adat',
    description: 'Berbagai upacara adat yang masih dilestarikan di Yogyakarta',
    image: '/images/tampilan.jpg',
  }
];

export default function Culture() {
  return (
    <section className="destinations section-animate" id="budaya" aria-labelledby="culture-title">
      <h2 className="section-title section-animate" id="culture-title">Budaya & Tradisi</h2>
      
      <div className="destination-tabs section-animate" role="tablist" aria-label="Filter budaya berdasarkan kategori">
        <button className="destination-tab active" role="tab" aria-selected={true} tabIndex={0}>Populer</button>
        <button className="destination-tab" role="tab" aria-selected={false} tabIndex={0}>Seni Pertunjukan</button>
        <button className="destination-tab" role="tab" aria-selected={false} tabIndex={0}>Kerajinan</button>
        <button className="destination-tab" role="tab" aria-selected={false} tabIndex={0}>Upacara Adat</button>
        <button className="destination-tab" role="tab" aria-selected={false} tabIndex={0}>Semua Budaya</button>
      </div>
      
      <div className="destinations-grid" role="tabpanel">
        {cultureItems.map((item, index) => (
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
      
      <button className="explore-button section-animate" aria-label="Jelajahi budaya lainnya">Jelajahi budaya lainnya</button>
    </section>
  );
}