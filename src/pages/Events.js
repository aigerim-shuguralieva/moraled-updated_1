import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import './Events.css';

function Events() {
  const { t } = useTranslation();

  const sessions = [
    { icon: 'fas fa-door-open', n: 1 },
    { icon: 'fas fa-chalkboard-teacher', n: 2 },
    { icon: 'fas fa-people-roof', n: 3 },
    { icon: 'fas fa-chart-line', n: 4 },
  ].map((item) => ({
    icon: item.icon,
    title: t(`events.session_${item.n}_title`),
    cadence: t(`events.session_${item.n}_cadence`),
    description: t(`events.session_${item.n}_desc`),
  }));

  return (
    <>
      <Seo
        title="Educator Sessions & Events"
        description="Live sessions for teachers, administrators, and families to learn more about MoralEd and how to get the most out of it."
        path="/events"
      />
      <Header />

      <section className="events-hero">
        <h1>{t('events.hero_title')}</h1>
        <p>{t('events.hero_subtitle')}</p>
      </section>

      <section className="events-section">
        <div className="events-grid">
          {sessions.map((session) => (
            <div className="events-card" key={session.title}>
              <div className="events-icon">
                <i className={session.icon}></i>
              </div>
              <span className="events-cadence">{session.cadence}</span>
              <h3>{session.title}</h3>
              <p>{session.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="events-cta">
        <h2>{t('events.cta_title')}</h2>
        <p>{t('events.cta_text')}</p>
        <a href="/contact" className="btn-primary">{t('events.cta_button')}</a>
      </section>

      <Footer />
    </>
  );
}

export default Events;
