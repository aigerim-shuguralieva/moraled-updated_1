import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import OurStory from './pages/OurStory';
import Team from './pages/Team';
import Features from './pages/Features';
import MoralEd from './pages/MoralEd';
import Contact from './pages/Contact';
import ScopeSequence from './pages/ScopeSequence';
import FAQ from './pages/FAQ';
import Research from './pages/Research';
import AboutBullying from './pages/AboutBullying';
import StudentVolunteers from './pages/StudentVolunteers';
import Materials from './pages/Materials';
import Events from './pages/Events';
import ClassroomClimate from './pages/ClassroomClimate';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import VerifyCertificate from './pages/VerifyCertificate';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partners" element={<Navigate to="/contact" replace />} />
        <Route path="/for-schools" element={<Navigate to="/contact" replace />} />
        <Route path="/partner-with-us" element={<Navigate to="/contact" replace />} />
        <Route path="/features" element={<Features />} />
        <Route path="/scope-and-sequence" element={<ScopeSequence />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about-bullying" element={<AboutBullying />} />
        <Route path="/student-volunteers" element={<StudentVolunteers />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/events" element={<Events />} />
        <Route path="/classroom-climate" element={<ClassroomClimate />} />
        <Route path="/moraled" element={<MoralEd />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;
