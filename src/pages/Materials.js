import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Materials.css';

function Materials() {
  const { t } = useTranslation();

  const items = [
    { icon: 'fas fa-book', n: 1 },
    { icon: 'fas fa-music', n: 2 },
    { icon: 'fas fa-people-group', n: 3 },
    { icon: 'fas fa-display', n: 4 },
    { icon: 'fas fa-envelope-open-text', n: 5 },
    { icon: 'fas fa-image', n: 6 },
    { icon: 'fas fa-square-poll-vertical', n: 7 },
    { icon: 'fas fa-clipboard-list', n: 8 },
  ].map((item) => ({
    icon: item.icon,
    title: t(`materials.item_${item.n}_title`),
    description: t(`materials.item_${item.n}_desc`),
  }));

  return (
    <>
      <Header />

      <section className="materials-hero">
        <h1>{t('materials.hero_title')}</h1>
        <p>{t('materials.hero_subtitle')}</p>
      </section>

      <section className="materials-section">
        <div className="materials-wrapper">
          <h2>{t('materials.intro_title')}</h2>
          <p className="materials-intro">
            {t('materials.intro_text')}
          </p>
          <div className="materials-grid">
            {items.map((item) => (
              <div className="materials-card" key={item.title}>
                <div className="materials-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="materials-cta">
        <h2>{t('materials.cta_title')}</h2>
        <p>{t('materials.cta_text')}</p>
        <a href="/partner-with-us" className="btn-primary">{t('materials.cta_button')}</a>
      </section>

      <Footer />
    </>
  );
}

export default Materials;
