import React from 'react';
import { Rocket, CheckCircle, Clock, Users, Target, Send } from 'lucide-react';
import NavBar from '../components/navBar';
import Footbar from '../components/footbar';
import '../css/startYourCampaign.css';

const StartYourCampaign = ({ navigateTo }) => {
  return (
    <div className="app-container">
      <nav className="nav-container">
        <NavBar navigateTo={navigateTo} />
      </nav>

      {/* Campaign Hero Section */}
      <section className="campaign-hero">
        <div className="campaign-hero-content">
          <h1 className="campaign-title">
            Start Your <span>Campaign</span>
          </h1>
          <p className="campaign-subtitle">
            Ready to elevate your social media presence? Let's create a customized strategy for your brand.
          </p>
          <div className="campaign-cta">
            <a href="#campaign-form" className="primary-button">
              Get Started
              <Rocket className="button-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* Campaign Benefits Section */}
      <section className="campaign-benefits">
        <h2>Why Start a Campaign With Us?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <CheckCircle className="benefit-icon" />
            <h3>Proven Results</h3>
            <p>Our campaigns have generated over 2M+ followers and 500% average growth for our clients.</p>
          </div>
          
          <div className="benefit-card">
            <Clock className="benefit-icon" />
            <h3>Quick Turnaround</h3>
            <p>We launch your campaign within 7 days of approval, ensuring you see results quickly.</p>
          </div>
          
          <div className="benefit-card">
            <Users className="benefit-icon" />
            <h3>Expert Team</h3>
            <p>Work with a dedicated team of social media specialists with platform-specific expertise.</p>
          </div>
          
          <div className="benefit-card">
            <Target className="benefit-icon" />
            <h3>Targeted Approach</h3>
            <p>We focus on reaching your ideal audience to maximize engagement and conversion.</p>
          </div>
        </div>
      </section>

      {/* Campaign Form Section */}
      <section id="campaign-form" className="campaign-form-section">
        <div className="campaign-form-container">
          <h2>Tell Us About Your Project</h2>
          <form action="https://formspree.io/f/xrbbopky" method="POST" className="campaign-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input type="text" id="company" name="company" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="website">Website (Optional)</label>
              <input type="url" id="website" name="website" />
            </div>
            
            <div className="form-group">
              <label htmlFor="budget">Monthly Budget</label>
              <select id="budget" name="budget" required>
                <option value="">Select a budget range</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="platforms">Platforms of Interest</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="checkbox" id="instagram" name="platforms[]" value="Instagram" />
                  <label htmlFor="instagram">Instagram</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="facebook" name="platforms[]" value="Facebook" />
                  <label htmlFor="facebook">Facebook</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="twitter" name="platforms[]" value="Twitter" />
                  <label htmlFor="twitter">Twitter</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="linkedin" name="platforms[]" value="LinkedIn" />
                  <label htmlFor="linkedin">LinkedIn</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="youtube" name="platforms[]" value="YouTube" />
                  <label htmlFor="youtube">YouTube</label>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="goals">Campaign Goals</label>
              <textarea id="goals" name="goals" rows="4" placeholder="What are you hoping to achieve with this campaign?" required></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Submit Request
              <Send className="button-icon" />
            </button>
          </form>
        </div>
      </section>

      <Footbar />
    </div>
  );
};

export default StartYourCampaign;