import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Research.css';

function Research() {
  const { t } = useTranslation();

  const stats = [
    { number: t('research.stat_1_number'), label: t('research.stat_1_label') },
    { number: t('research.stat_2_number'), label: t('research.stat_2_label') },
    { number: t('research.stat_3_number'), label: t('research.stat_3_label') },
    { number: t('research.stat_4_number'), label: t('research.stat_4_label') },
  ];

  const methods = [
    {
      icon: 'fas fa-clipboard-check',
      title: t('research.method_1_title'),
      description: t('research.method_1_desc'),
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: t('research.method_2_title'),
      description: t('research.method_2_desc'),
    },
    {
      icon: 'fas fa-comments',
      title: t('research.method_3_title'),
      description: t('research.method_3_desc'),
    },
    {
      icon: 'fas fa-file-alt',
      title: t('research.method_4_title'),
      description: t('research.method_4_desc'),
    },
  ];

  return (
    <>
      <Header />

      <section className="research-hero">
        <h1>{t('research.hero_title')}</h1>
        <p>{t('research.hero_subtitle')}</p>
      </section>

      <section className="research-stats-section">
        <div className="research-stats-grid">
          {stats.map((stat) => (
            <div className="research-stat-card" key={stat.label}>
              <div className="research-stat-number">{stat.number}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="research-stats-note">
          {t('research.stats_note')}
        </p>
      </section>

      <section className="research-methods-section">
        <h2>{t('research.methods_title')}</h2>
        <div className="research-methods-grid">
          {methods.map((method) => (
            <div className="research-method-card" key={method.title}>
              <div className="research-method-icon">
                <i className={method.icon}></i>
              </div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="research-cta">
        <h2>{t('research.cta_title')}</h2>
        <p>{t('research.cta_text')}</p>
        <a href="/partner-with-us" className="btn-primary">{t('research.cta_button')}</a>
      </section>

      <Footer />
    </>
  );
}

export default Research;
