import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Team from './pages/Team';
import PartnerWithUs from './pages/PartnerWithUs';
import Features from './pages/Features';
import MoralEd from './pages/MoralEd';
import Contact from './pages/Contact';
import ScopeSequence from './pages/ScopeSequence';
import FAQ from './pages/FAQ';
import Research from './pages/Research';
import AboutBullying from './pages/AboutBullying';
import StudentVolunteers from './pages/StudentVolunteers';
import Materials from './pages/Materials';
import Pricing from './pages/Pricing';
import Events from './pages/Events';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/partners" element={<Navigate to="/partner-with-us" replace />} />
        <Route path="/for-schools" element={<Navigate to="/partner-with-us" replace />} />
        <Route path="/features" element={<Features />} />
        <Route path="/scope-and-sequence" element={<ScopeSequence />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about-bullying" element={<AboutBullying />} />
        <Route path="/student-volunteers" element={<StudentVolunteers />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/moraled" element={<MoralEd />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
