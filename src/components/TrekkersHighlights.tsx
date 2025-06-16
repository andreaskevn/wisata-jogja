"use client";

import Image from 'next/image';

const highlights = [
  {
    id: 1,
    author: "Budi Santoso",
    text: "Pengalaman tak terlupakan menjelajahi Yogyakarta. Dari keindahan alam hingga warisan budaya, Yogyakarta menawarkan pengalaman budaya yang tak tertandingi.",
    image: "/images/borobudur.jpg",
    title: "Candi Borobudur di Pagi Hari"
  },
  {
    id: 2,
    image: "/images/tari.jpg",
    title: "Pesona Tari Tradisional Yogyakarta"
  }
];

export default function TrekkersHighlights() {
  return (
    <section className="trekkers-highlights" id="pengalaman" aria-labelledby="trekkers-highlights-title">
      <h2 className="section-title" id="trekkers-highlights-title">Pengalaman Wisatawan</h2>
      
      <div className="highlights-grid container">
        <div>
          <p className="highlight-author" tabIndex={0}>{highlights[0].author}</p>
          <p className="highlight-text" tabIndex={0}>
            {highlights[0].text}
          </p>
        </div>
        
        {highlights.map((highlight) => (
          <article 
            key={highlight.id} 
            className="highlight-card" 
            tabIndex={0} 
            aria-label={highlight.title}
          >
            <Image 
              src={highlight.image} 
              alt={highlight.title} 
              width={350} 
              height={170}
            />
            <p>{highlight.title}</p>
          </article>
        ))}
      </div>
      
      <button className="highlights-button" aria-label="Lihat pengalaman lainnya">
        Lihat pengalaman lainnya
      </button>
    </section>
  );
}