import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ScopeSequence.css';

function ScopeSequence() {
  const { t } = useTranslation();

  const scope = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
    month: t(`scopeSequence.month_${n}`),
    pillar: t(`scopeSequence.pillar_${n}`),
    focus: t(`scopeSequence.skills_${n}`),
    objective: t(`scopeSequence.objective_${n}`),
  }));

  return (
    <>
      <Header />
      <section className="scope-section">
        <div className="scope-wrapper">
          <h1>{t('scopeSequence.title')}</h1>
          <p className="scope-intro">
            {t('scopeSequence.intro')}
          </p>

          <table className="scope-table">
            <thead>
              <tr>
                <th>{t('scopeSequence.table_month')}</th>
                <th>{t('scopeSequence.table_pillar')}</th>
                <th>{t('scopeSequence.table_skills')}</th>
                <th>{t('scopeSequence.table_objective')}</th>
              </tr>
            </thead>
            <tbody>
              {scope.map((row, index) => (
                <tr key={row.month} className={index % 2 === 1 ? 'scope-row-shaded' : ''}>
                  <td>{row.month}</td>
                  <td className="scope-pillar">{row.pillar}</td>
                  <td>{row.focus}</td>
                  <td>{row.objective}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ScopeSequence;