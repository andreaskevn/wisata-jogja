"use client";

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Terima kasih telah berlangganan dengan email: ${email}`);
      setEmail('');
    }
  };

  return (
    <section className="newsletter" aria-labelledby="newsletter-title" style={{
      backgroundImage: "url('/images/hero-jogja.jpg')"
    }}>
      <h2 id="newsletter-title">Dapatkan Inspirasi Wisata Langsung ke Email Anda</h2>
      <p>Daftar untuk menerima cerita perjalanan terbaru, panduan destinasi, dan penawaran eksklusif - semua disesuaikan untuk petualangan Anda berikutnya.</p>
      
      <form className="newsletter-form" aria-describedby="newsletter-desc" onSubmit={handleSubmit}>
        <input 
          className="newsletter-input" 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder="Masukkan alamat email Anda" 
          aria-label="Alamat email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          type="submit" 
          className="newsletter-submit" 
          aria-label="Berlangganan newsletter"
        >
          Berlangganan
        </button>
      </form>
    </section>
  );
}