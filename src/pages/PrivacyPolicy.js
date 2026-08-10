import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <>
      <Header />

      <section className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: August 2026</p>
      </section>

      <section className="privacy-section">
        <div className="privacy-wrapper">
          <p>
            This policy explains what information MoralEd collects through
            this website, how we use it, and who we share it with. If you
            have questions, reach out any time at{' '}
            <a href="mailto:info@moraled.org">info@moraled.org</a>.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you submit our contact form, we collect the information you
            provide: your name, email address, school name, role (teacher,
            administrator, principal, or other), and your message. We don't
            collect this information anywhere else on the site.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information you submit only to respond to your
            inquiry and follow up about bringing MoralEd to your school or
            organization. We don't sell your information or use it for
            advertising.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our contact form is processed by EmailJS, a third-party email
            delivery service, which transmits your submission to our team's
            inbox. EmailJS handles this data according to its own privacy
            policy. We don't share your information with any other third
            party.
          </p>

          <h2>Cookies and Local Storage</h2>
          <p>
            We store your selected language (English, Russian, or Kyrgyz) in
            your browser's local storage so the site remembers your
            preference on return visits. We don't use tracking or
            advertising cookies.
          </p>

          <h2>Data Retention</h2>
          <p>
            We keep contact form submissions only as long as needed to
            respond to your inquiry and maintain a record of the
            conversation. You can request that we delete your information at
            any time by emailing us.
          </p>

          <h2>Your Rights</h2>
          <p>
            You can ask us what information we have about you, request a
            correction, or ask us to delete it, by contacting{' '}
            <a href="mailto:info@moraled.org">info@moraled.org</a>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            If we make changes to this policy, we'll update the date at the
            top of this page.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
