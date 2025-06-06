import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, PenTool, TrendingUp, BarChart2, Users, Award } from 'lucide-react';
import NavBar from '../components/navBar';
import Footbar from '../components/footbar';
import '../css/services.css';

const Services = ({ navigateTo }) => {
  return (
    <div className="app-container">
      <nav className="nav-container">
        <NavBar navigateTo={navigateTo} />
      </nav>

      {/* Services Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-title">
            Our <span>Services</span>
          </h1>
          <p className="services-subtitle">
            Strategic solutions tailored to elevate your brand's digital presence across all platforms
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services-section">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <Instagram />
            </div>
            <h3>Instagram Marketing</h3>
            <p>Grow your Instagram presence with engaging content, Stories, Reels, and targeted advertising campaigns.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Content Creation</div>
              <div className="feature-item"><span className="dot"></span>Story Design</div>
              <div className="feature-item"><span className="dot"></span>Reels Production</div>
              <div className="feature-item"><span className="dot"></span>Instagram Ads</div>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <Facebook />
            </div>
            <h3>Facebook Marketing</h3>
            <p>Drive engagement and sales with strategic Facebook marketing and advanced targeting solutions.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Ad Campaign Setup</div>
              <div className="feature-item"><span className="dot"></span>Custom Audiences</div>
              <div className="feature-item"><span className="dot"></span>Retargeting</div>
              <div className="feature-item"><span className="dot"></span>Analytics & ROI</div>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <Linkedin />
            </div>
            <h3>LinkedIn Marketing</h3>
            <p>Build your professional brand and generate B2B leads through strategic LinkedIn marketing.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Profile Optimization</div>
              <div className="feature-item"><span className="dot"></span>B2B Lead Generation</div>
              <div className="feature-item"><span className="dot"></span>Sponsored Content</div>
              <div className="feature-item"><span className="dot"></span>InMail Campaigns</div>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <Twitter />
            </div>
            <h3>Twitter Marketing</h3>
            <p>Engage with your audience in real-time and build a strong Twitter presence.</p>
            <div className="features-grid">
              <div className="feature-item"><span className="dot"></span>Tweet Strategy</div>
              <div className="feature-item"><span className="dot"></span>Trend Monitoring</div>
              <div className="feature-item"><span className="dot"></span>Engagement Tactics</div>
              <div className="feature-item"><span className="dot"></span>Twitter Ads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services-section">
        <h2>Additional <span>Services</span></h2>
        <div className="additional-services-grid">
          <div className="additional-service-card">
            <div className="additional-service-icon">
              <PenTool />
            </div>
            <h3>Content Creation</h3>
            <p>Professional content creation services tailored to your brand voice and audience preferences.</p>
          </div>
          
          <div className="additional-service-card">
            <div className="additional-service-icon">
              <TrendingUp />
            </div>
            <h3>Growth Strategy</h3>
            <p>Data-driven growth strategies to increase your social media following and engagement.</p>
          </div>
          
          <div className="additional-service-card">
            <div className="additional-service-icon">
              <BarChart2 />
            </div>
            <h3>Analytics & Reporting</h3>
            <p>Comprehensive analytics and reporting to track your social media performance and ROI.</p>
          </div>
          
          <div className="additional-service-card">
            <div className="additional-service-icon">
              <Users />
            </div>
            <h3>Community Management</h3>
            <p>Active community management to build relationships and engage with your audience.</p>
          </div>
          
          <div className="additional-service-card">
            <div className="additional-service-icon">
              <Award />
            </div>
            <h3>Influencer Marketing</h3>
            <p>Strategic influencer partnerships to expand your reach and build credibility.</p>
          </div>
        </div>
      </section>

      <Footbar />
    </div>
  );
};

export default Services;