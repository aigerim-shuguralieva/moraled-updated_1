import React from 'react';
import { useTranslation } from 'react-i18next';
import './MoralEd.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import GallerySlider from '../components/gallery/GallerySlider';
import SeminarSection from '../components/seminars/SeminarSection';
import PartnersSection from '../components/partners/PartnersSection';

function MoralEd() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title="MoralEd: Growing Character, Together"
        description="Explore MoralEd through photos and educator seminars celebrating values-based character education."
        path="/moraled"
      />
      <Header />

      {/* ✅ Hero Bölümü */}
      <section className="moraled-hero">
        <h1>{t('moraled.hero_title')}</h1>
        <p>{t('moraled.hero_subtitle')}</p>
      </section>

      {/* ✅ Yeni Galeri Slider */}
      <GallerySlider />

      {/* ✅ Yeni Seminer Modülü */}
      <SeminarSection />

      {/* Partner Schools Carousel */}
      <PartnersSection />

      <section className="moraled-cta">
        <h2>{t('moraled.cta_title')}</h2>
        <p>{t('moraled.cta_text')}</p>
        <a href="/contact" className="btn-primary">{t('moraled.cta_button')}</a>
      </section>

      <Footer />
    </>
  );
}

export default MoralEd;
