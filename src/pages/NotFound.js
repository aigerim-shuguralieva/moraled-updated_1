import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './NotFound.css';

function NotFound() {
  return (
    <>
      <Header />
      <section className="not-found-section">
        <p className="not-found-code">404</p>
        <h1>We couldn't find that page</h1>
        <p>
          The page you're looking for may have moved or no longer exists.
          Let's get you back on track.
        </p>
        <a href="/" className="btn-primary">Back to Home</a>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
