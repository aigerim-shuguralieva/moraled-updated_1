import React from 'react';
import { useTranslation } from 'react-i18next';
import './MoralEd.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GallerySlider from '../components/gallery/GallerySlider';
import SeminarSection from '../components/seminars/SeminarSection';

function MoralEd() {
  const { t } = useTranslation();
  return (
    <>
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

      <Footer />
    </>
  );
}

export default MoralEd;
