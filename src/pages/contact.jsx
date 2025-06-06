import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import NavBar from '../components/navBar';
import Footbar from '../components/footbar';
import '../css/contact.css';

const Contact = ({ navigateTo }) => {
  return (
    <div className="app-container">
      <nav className="nav-container">
        <NavBar navigateTo={navigateTo} />
      </nav>

      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">
            Get in <span>Touch</span>
          </h1>
          <p className="contact-subtitle">
            Have a question or want to work with us? Reach out using the form below.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-info-column">
            <h2>Contact Information</h2>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="contact-info-items">
              <div className="contact-info-item">
                <Phone className="contact-icon" />
                <div>
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <Mail className="contact-icon" />
                <div>
                  <h3>Email Us</h3>
                  <p>hello@digitalgram.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <MapPin className="contact-icon" />
                <div>
                  <h3>Visit Us</h3>
                  <p>123 Social Ave, Digital City, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-column">
            <form action="https://formspree.io/f/xrbbopky" method="POST" className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
                <Send className="button-icon" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footbar />
    </div>
  );
};

export default Contact;