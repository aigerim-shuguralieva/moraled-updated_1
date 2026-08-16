import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import SchoolsOfMoralEd from '../components/schools/SchoolsOfMoralEd';
import PartnersSection from '../components/partners/PartnersSection';
import './ForSchools.css';
import './Partners.css';

function PartnerWithUs() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: 'fas fa-heart',
      title: t('forSchools.benefit_1_title'),
      description: t('forSchools.benefit_1_desc'),
    },
    {
      icon: 'fas fa-chart-bar',
      title: t('forSchools.benefit_2_title'),
      description: t('forSchools.benefit_2_desc'),
    },
    {
      icon: 'fas fa-book-open',
      title: t('forSchools.benefit_3_title'),
      description: t('forSchools.benefit_3_desc'),
    },
    {
      icon: 'fas fa-globe',
      title: t('forSchools.benefit_4_title'),
      description: t('forSchools.benefit_4_desc'),
    },
  ];

  const testimonials = [
    {
      quote: t('forSchools.testimonial_1_quote'),
      name: t('forSchools.testimonial_1_name'),
    },
    {
      quote: t('forSchools.testimonial_2_quote'),
      name: t('forSchools.testimonial_2_name'),
    },
    {
      quote: t('forSchools.testimonial_3_quote'),
      name: t('forSchools.testimonial_3_name'),
    },
  ];

  const steps = [
    {
      number: '01',
      icon: 'fas fa-comments',
      title: t('forSchools.step_1_title'),
      description: t('forSchools.step_1_desc'),
    },
    {
      number: '02',
      icon: 'fas fa-sliders-h',
      title: t('forSchools.step_2_title'),
      description: t('forSchools.step_2_desc'),
    },
    {
      number: '03',
      icon: 'fas fa-chalkboard-teacher',
      title: t('forSchools.step_3_title'),
      description: t('forSchools.step_3_desc'),
    },
    {
      number: '04',
      icon: 'fas fa-rocket',
      title: t('forSchools.step_4_title'),
      description: t('forSchools.step_4_desc'),
    },
    {
      number: '05',
      icon: 'fas fa-chart-line',
      title: t('forSchools.step_5_title'),
      description: t('forSchools.step_5_desc'),
    },
  ];

  const partners = [
    {
      name: t('partners.partner_1_name'),
      reason: t('partners.partner_1_reason'),
      logo: '/images/partner-kef.png',
    },
    {
      name: t('partners.partner_2_name'),
      reason: t('partners.partner_2_reason'),
      logo: '/images/partner-gvn.png',
    },
    {
      name: t('partners.partner_3_name'),
      reason: t('partners.partner_3_reason'),
      logo: '/images/partner-yci.png',
    },
  ];

  return (
    <>
      <Seo
        title="Partner With Us"
        description="Bring MoralEd's monthly character education pillars to your school. See benefits, implementation steps, and our partner schools."
        path="/partner-with-us"
      />
      <Header />

      <section className="for-schools-hero">
        <h1>{t('forSchools.hero_title')}</h1>
        <p>
          {t('forSchools.hero_subtitle')}
        </p>
      </section>

      <section className="for-schools-benefits">
        <h2>{t('forSchools.benefits_title')}</h2>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit-card" key={benefit.title}>
              <div className="benefit-icon">
                <i className={benefit.icon}></i>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <SchoolsOfMoralEd />

      <section className="implementation-section">
        <div className="implementation-wrapper">
          <div className="implementation-steps">
            {steps.map((step) => (
              <div className="implementation-step" key={step.number}>
                <div className="step-number">{step.number}</div>
                <div className="step-icon">
                  <i className={step.icon}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="for-schools-testimonials">
        <h2>{t('forSchools.testimonials_title')}</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <i className="fas fa-quote-left testimonial-quote-icon"></i>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="for-schools-cta">
        <h2>{t('forSchools.cta_title')}</h2>
        <p>{t('forSchools.cta_text')}</p>
        <a href="/contact" className="btn-primary">{t('forSchools.cta_button')}</a>
      </section>

      <section className="partners-section">
        <div className="partners-wrapper">
          <h2>{t('partners.title')}</h2>
          <p className="partners-intro">
            {t('partners.intro')}
          </p>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partner-card" key={index}>
                <img src={partner.logo} alt={partner.name} />
                <h3>{partner.name}</h3>
                <p>{partner.reason}</p>
              </div>
            ))}
          </div>

          <div className="partner-values">
            <h3>{t('partners.why_partner_title')}</h3>
            <ul>
              <li><i className="fas fa-handshake"></i> {t('partners.why_1')}</li>
              <li><i className="fas fa-globe"></i> {t('partners.why_2')}</li>
              <li><i className="fas fa-chart-line"></i> {t('partners.why_3')}</li>
              <li><i className="fas fa-graduation-cap"></i> {t('partners.why_4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partner Schools Carousel */}
      <PartnersSection />

      {/* Impact Together */}
      <section className="impact-together">
        <h3>{t('partners.impact_title')}</h3>
        <div className="impact-grid">
          <div className="impact-box">
            <span>🏫</span>
            <h4>{t('partners.impact_schools')}</h4>
            <p>{t('partners.impact_schools_desc')}</p>
          </div>
          <div className="impact-box">
            <span>👨‍🏫</span>
            <h4>{t('partners.impact_educators')}</h4>
            <p>{t('partners.impact_educators_desc')}</p>
          </div>
          <div className="impact-box">
            <span>🧒</span>
            <h4>{t('partners.impact_students')}</h4>
            <p>{t('partners.impact_students_desc')}</p>
          </div>
          <div className="impact-box">
            <span>📍</span>
            <h4>{t('partners.impact_regions')}</h4>
            <p>{t('partners.impact_regions_desc')}</p>
          </div>
        </div>
      </section>

      {/* Partner Voices */}
      <section className="partner-voices">
        <h3>{t('partners.voices_title')}</h3>
        <blockquote>
          {t('partners.voice_1')}
        </blockquote>
        <blockquote>
          {t('partners.voice_2')}
        </blockquote>
      </section>

      {/* How We Collaborate */}
      <section className="collaborate-section">
        <h2>{t('partners.collaborate_title')}</h2>
        <div className="collaborate-steps">
          <div className="collab-card">
            <span><i className="fas fa-handshake"></i></span>
            <h3>{t('partners.collab_1_title')}</h3>
            <p>{t('partners.collab_1_desc')}</p>
          </div>
          <div className="collab-card">
            <span><i className="fas fa-pen-ruler"></i></span>
            <h3>{t('partners.collab_2_title')}</h3>
            <p>{t('partners.collab_2_desc')}</p>
          </div>
          <div className="collab-card">
            <span><i className="fas fa-graduation-cap"></i></span>
            <h3>{t('partners.collab_3_title')}</h3>
            <p>{t('partners.collab_3_desc')}</p>
          </div>
          <div className="collab-card">
            <span><i className="fas fa-chart-line"></i></span>
            <h3>{t('partners.collab_4_title')}</h3>
            <p>{t('partners.collab_4_desc')}</p>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="become-partner-section">
        <h2>{t('partners.become_title')}</h2>
        <p className="partner-intro">
          {t('partners.become_intro')}
        </p>
        <ul className="partner-benefits">
          <li><i className="fas fa-check"></i> {t('partners.benefit_1')}</li>
          <li><i className="fas fa-check"></i> {t('partners.benefit_2')}</li>
          <li><i className="fas fa-check"></i> {t('partners.benefit_3')}</li>
          <li><i className="fas fa-check"></i> {t('partners.benefit_4')}</li>
        </ul>
        <a href="/contact" className="btn-primary">{t('partners.become_cta')}</a>
      </section>

      <Footer />
    </>
  );
}

export default PartnerWithUs;
