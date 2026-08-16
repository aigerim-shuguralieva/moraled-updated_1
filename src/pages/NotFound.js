import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import './NotFound.css';

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for may have moved or no longer exists." noIndex />
      <Header />
      <section className="not-found-section">
        <p className="not-found-code">404</p>
        <h1>{t('notFound.title')}</h1>
        <p>
          {t('notFound.text')}
        </p>
        <a href="/" className="btn-primary">{t('notFound.button')}</a>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
