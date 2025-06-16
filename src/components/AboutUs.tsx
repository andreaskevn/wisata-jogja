"use client";

import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="destinations" id="tentang-kami" aria-labelledby="about-title">
      <h2 className="section-title" id="about-title">Tentang Kami</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="section-subtitle mb-6">
            Wisata Jogja adalah platform yang didedikasikan untuk memperkenalkan keindahan dan keunikan Yogyakarta kepada dunia. Kami menyediakan informasi lengkap tentang destinasi wisata, kuliner, budaya, dan berbagai pengalaman menarik yang bisa dinikmati di Yogyakarta.
          </p>
          <p className="section-subtitle mb-6">
            Tim kami terdiri dari para pecinta wisata dan penduduk lokal yang memiliki pengetahuan mendalam tentang Yogyakarta. Kami berkomitmen untuk memberikan informasi yang akurat dan terkini untuk membantu Anda merencanakan perjalanan yang tak terlupakan ke Yogyakarta.
          </p>
          <button className="explore-button" aria-label="Pelajari lebih lanjut tentang kami">
            Pelajari lebih lanjut
          </button>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-[20px] overflow-hidden">
          <Image 
            src="/images/team.jpg" 
            alt="Tim Wisata Jogja" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}