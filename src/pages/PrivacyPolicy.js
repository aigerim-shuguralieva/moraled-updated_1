import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <section className="privacy-hero">
        <h1>{t('privacy.hero_title')}</h1>
        <p>{t('privacy.last_updated')}</p>
      </section>

      <section className="privacy-section">
        <div className="privacy-wrapper">
          <p>
            {t('privacy.intro')}{' '}
            <a href="mailto:info@moraled.org">info@moraled.org</a>.
          </p>

          <h2>{t('privacy.info_title')}</h2>
          <p>
            {t('privacy.info_text')}
          </p>

          <h2>{t('privacy.use_title')}</h2>
          <p>
            {t('privacy.use_text')}
          </p>

          <h2>{t('privacy.third_party_title')}</h2>
          <p>
            {t('privacy.third_party_text')}
          </p>

          <h2>{t('privacy.cookies_title')}</h2>
          <p>
            {t('privacy.cookies_text')}
          </p>

          <h2>{t('privacy.retention_title')}</h2>
          <p>
            {t('privacy.retention_text')}
          </p>

          <h2>{t('privacy.rights_title')}</h2>
          <p>
            {t('privacy.rights_text')}{' '}
            <a href="mailto:info@moraled.org">info@moraled.org</a>.
          </p>

          <h2>{t('privacy.changes_title')}</h2>
          <p>
            {t('privacy.changes_text')}
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
