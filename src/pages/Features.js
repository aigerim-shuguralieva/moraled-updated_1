import React from 'react';
import { useTranslation } from 'react-i18next';
import './Features.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

function Features() {
  const { t } = useTranslation();

  const howItWorksSteps = [
    { icon: 'fas fa-book-open', title: t('howItWorks.step_1_title'), description: t('howItWorks.step_1_desc') },
    { icon: 'fas fa-people-group', title: t('howItWorks.step_2_title'), description: t('howItWorks.step_2_desc') },
    { icon: 'fas fa-chart-line', title: t('howItWorks.step_3_title'), description: t('howItWorks.step_3_desc'), link: '/research', linkLabel: t('howItWorks.step_3_link') },
  ];

  const features = [
    {
      icon: 'fas fa-child',
      title: t('features.feature_1_title'),
      description: t('features.feature_1_desc'),
    },
    {
      icon: 'fas fa-palette',
      title: t('features.feature_2_title'),
      description: t('features.feature_2_desc'),
    },
    {
      icon: 'fas fa-chart-line',
      title: t('features.feature_3_title'),
      description: t('features.feature_3_desc'),
    },
    {
      icon: 'fas fa-handshake',
      title: t('features.feature_4_title'),
      description: t('features.feature_4_desc'),
    },
  ];

  const schoolBenefits = [
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

  return (
    <>
      <Seo
        title="How MoralEd Works"
        description="Learn how MoralEd's Learn, Practice, Measure framework builds character through monthly values-based lessons."
        path="/features"
      />
      <Header />

      <section className="how-it-works-section">
        <div className="how-it-works-wrapper">
          <h1>{t('howItWorks.title')}</h1>
          <p className="how-it-works-intro">
            {t('howItWorks.intro')}
          </p>
          <div className="how-it-works-steps">
            {howItWorksSteps.map((step, index) => (
              <div className="how-it-works-step" key={step.title}>
                <div className="how-it-works-step-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="how-it-works-step-icon">
                  <i className={step.icon}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {step.link && (
                  <a href={step.link} className="how-it-works-step-link">
                    {step.linkLabel} <i className="fas fa-arrow-right"></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-wrapper">
          <h2>{t('features.title')}</h2>
          <p className="features-intro">
            {t('features.intro')}
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <span className="feature-icon"><i className={feature.icon}></i></span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-benefits-section">
        <div className="features-benefits-wrapper">
          <h2>{t('forSchools.benefits_title')}</h2>
          <div className="features-benefits-grid">
            {schoolBenefits.map((benefit) => (
              <div className="features-benefit-card" key={benefit.title}>
                <div className="features-benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Features;
