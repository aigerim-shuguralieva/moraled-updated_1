import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Pricing.css';

function Pricing() {
  const { t } = useTranslation();

  const tiers = [
    {
      name: t('pricing.tier_1_name'),
      tagline: t('pricing.tier_1_tagline'),
      features: [
        t('pricing.tier_1_feature_1'),
        t('pricing.tier_1_feature_2'),
        t('pricing.tier_1_feature_3'),
        t('pricing.tier_1_feature_4'),
      ],
    },
    {
      name: t('pricing.tier_2_name'),
      badge: t('pricing.tier_2_badge'),
      tagline: t('pricing.tier_2_tagline'),
      features: [
        t('pricing.tier_2_feature_1'),
        t('pricing.tier_2_feature_2'),
        t('pricing.tier_2_feature_3'),
        t('pricing.tier_2_feature_4'),
        t('pricing.tier_2_feature_5'),
      ],
      featured: true,
    },
    {
      name: t('pricing.tier_3_name'),
      tagline: t('pricing.tier_3_tagline'),
      features: [
        t('pricing.tier_3_feature_1'),
        t('pricing.tier_3_feature_2'),
        t('pricing.tier_3_feature_3'),
        t('pricing.tier_3_feature_4'),
        t('pricing.tier_3_feature_5'),
      ],
    },
  ];

  return (
    <>
      <Header />

      <section className="pricing-hero">
        <h1>{t('pricing.hero_title')}</h1>
        <p>{t('pricing.hero_subtitle')}</p>
      </section>

      <section className="pricing-tiers-section">
        <div className="pricing-tiers-grid">
          {tiers.map((tier) => (
            <div className={`pricing-tier-card${tier.featured ? ' pricing-tier-card--featured' : ''}`} key={tier.name}>
              {tier.badge && <span className="pricing-tier-badge">{tier.badge}</span>}
              <h2>{tier.name}</h2>
              <p className="pricing-tier-tagline">{tier.tagline}</p>
              <ul className="pricing-tier-features">
                {tier.features.map((feature) => (
                  <li key={feature}><i className="fas fa-check"></i> {feature}</li>
                ))}
              </ul>
              <a href="/contact" className={tier.featured ? 'btn-primary' : 'btn-outline'}>
                {t('pricing.tier_cta')}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-note-section">
        <div className="pricing-note-wrapper">
          <h2>{t('pricing.note_title')}</h2>
          <p>{t('pricing.note_text')}</p>
        </div>
      </section>

      <section className="pricing-cta">
        <h2>{t('pricing.cta_title')}</h2>
        <p>{t('pricing.cta_text')}</p>
        <a href="/contact" className="btn-primary">{t('pricing.cta_button')}</a>
      </section>

      <Footer />
    </>
  );
}

export default Pricing;
