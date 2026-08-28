import React from 'react';
import './SeminarSection.css';

const seminars = [
  {
    title: 'Online Privacy for Kids: Internet Safety and Security',
    source: 'Smile and Learn',
    watchUrl: 'https://www.youtube.com/watch?v=yiKeLOKc1tw',
    video: 'https://www.youtube.com/embed/yiKeLOKc1tw?si=EJTmwCxBpDP8YfdT',
    description: 'A friendly introduction to online privacy basics for children.',
  },
  {
    title: 'Internet Safety for Kids',
    source: 'Twinkl Teaching Resources',
    watchUrl: 'https://www.youtube.com/watch?v=JTl211YlFzc',
    video: 'https://www.youtube.com/embed/JTl211YlFzc?si=laAo2JWcsyFnOGdF',
    description: 'Practical internet safety tips educators can share with students.',
  },
  {
    title: 'eSafety for Parents: Inappropriate Content',
    source: 'eSafety Office',
    watchUrl: 'https://www.youtube.com/watch?v=Twael58dL1s',
    video: 'https://www.youtube.com/embed/Twael58dL1s?si=9U_i9LBT-7vSL8y1',
    description: 'A short animation helping parents talk with kids about inappropriate content online.',
  },
];

const SeminarSection = () => {
  return (
    <section className="seminar-section">
      <h2>Recommended Videos for Educators & Families</h2>
      <p className="seminar-section-intro">
        Curated resources from outside organizations that complement character education — especially around online safety and digital citizenship. These are not MoralEd productions.
      </p>
      <div className="seminar-grid">
        {seminars.map((seminar, index) => (
          <div className="seminar-card" key={index}>
            <div className="video-wrapper">
              <iframe
                src={seminar.video}
                title={seminar.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>{seminar.title}</h3>
            <p className="seminar-card-source">via {seminar.source}</p>
            <p>{seminar.description}</p>
            <a href={seminar.watchUrl} className="seminar-watch-link" target="_blank" rel="noreferrer">
              Watch on YouTube <i className="fas fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeminarSection;
