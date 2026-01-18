"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import FinalCTAStrip from '@/components/home-page/home-10/FinalCTAStrip';

const AboutUsExtendedBootstrap = () => {
  const [activeTab, setActiveTab] = useState('insurance');
  const [openAccordion, setOpenAccordion] = useState(0);

  const serviceCategories = {
    insurance: {
      title: 'Insurance Solutions',
      icon: 'bi-shield-check',
      services: [
        {
          title: 'Health Insurance',
          icon: 'bi-heart-pulse',
          description: 'Ensure medical security for yourself and your family in India with comprehensive health insurance plans.',
          details: [
            'Cashless claim settlement at 10,000+ hospitals',
            'Pre/post hospitalization coverage',
            'Critical illness riders',
            'Coverage for dependent parents and family members in India',
            'Protection during your visits to India',
            'Tax benefits under Section 80D'
          ]
        },
        {
          title: 'Term Life Insurance',
          icon: 'bi-shield-fill-check',
          description: 'Protect your family\'s financial future with high-value term life insurance plans from top Indian insurers.',
          details: [
            'Pure protection with low premiums',
            'Global claim payout',
            'Easy application with video/tele medicals',
            'Tax-free payout to nominee',
            'Coverage in INR with large coverage amounts'
          ]
        },
        {
          title: 'Endowment Plans',
          icon: 'bi-piggy-bank-fill',
          description: 'Life insurance policy that combines insurance and savings for future financial goals.',
          details: [
            'Life coverage with savings component',
            'Maturity benefit if you survive the policy term',
            'Bonus additions in participating plans',
            'Tax benefits under Section 80C and 10(10D)',
            'Ideal for education, marriage, or retirement planning'
          ]
        },
        {
          title: 'ULIPs',
          icon: 'bi-graph-up-arrow',
          description: 'Unit Linked Insurance Plans combining life insurance and market-linked investments.',
          details: [
            'Dual benefits: investment + life cover',
            'Tax-free maturity under Section 10(10D)',
            'Multiple fund options (equity, balanced, debt)',
            'Partial withdrawal & fund switch options',
            'Ideal for wealth creation with protection'
          ]
        }
      ]
    },
    investments: {
      title: 'Investment Solutions',
      icon: 'bi-cash-stack',
      services: [
        {
          title: 'Mutual Funds',
          icon: 'bi-bar-chart-line',
          description: 'Professionally managed investment schemes for wealth creation.',
          details: [
            'Expert fund management',
            'Diversified portfolio reducing risk',
            'SIP options starting from ₹500',
            'ELSS for tax saving under 80C',
            'Equity, debt, and hybrid fund options',
            'Easy liquidity and transparency',
            'SEBI regulated for investor protection'
          ]
        },
        {
          title: 'Corporate Fixed Deposits',
          icon: 'bi-bank2',
          description: 'Term deposits from reputed companies offering higher returns than bank FDs.',
          details: [
            'Higher interest rates than bank FDs',
            'Fixed & predictable income',
            'Flexible tenure options',
            'Multiple payout frequencies',
            'Ideal for conservative investors',
            'Regular interest income options'
          ]
        },
        {
          title: 'Bonds & Debt Instruments',
          icon: 'bi-receipt',
          description: 'Fixed-income securities for steady income with capital preservation.',
          details: [
            'Regular interest payments',
            'Lower volatility than equities',
            'Government and corporate options',
            'Capital safety focus',
            'Suitable for income generation'
          ]
        }
      ]
    },
    retirement: {
      title: 'Retirement Planning',
      icon: 'bi-calendar2-check',
      services: [
        {
          title: 'National Pension System (NPS)',
          icon: 'bi-bank',
          description: 'Government-backed, long-term retirement savings scheme.',
          details: [
            'Low-cost fund management',
            'Market-linked growth potential',
            'Tax benefits under applicable sections',
            'Choice of fund managers',
            'PFRDA regulated',
            'Flexible asset allocation'
          ]
        },
        {
          title: 'Annuity Plans',
          icon: 'bi-cash-coin',
          description: 'Guaranteed regular income after retirement for financial stability.',
          details: [
            'Assured income for life',
            'Protection against market volatility',
            'Multiple annuity options',
            'Single life and joint life options',
            'Return of purchase price variants',
            'Peace of mind post-retirement'
          ]
        },
        {
          title: 'Government Schemes',
          icon: 'bi-building-check',
          description: 'Government-backed savings schemes for secure retirement.',
          details: [
            'Senior Citizens Savings Scheme (SCSS)',
            'Public Provident Fund (PPF)',
            'National Savings Certificates (NSC)',
            'Post Office Monthly Income Scheme',
            'Capital protection assured',
            'Tax benefits available'
          ]
        }
      ]
    }
  };

  return (
    <div className="about-us-extended">
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '120px 0 80px',
        color: 'white'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <div className="mb-4">
                <span className="badge bg-white text-primary px-4 py-2 rounded-pill fw-semibold mb-3" style={{ fontSize: '14px' }}>
                  About INSURVEST
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4" style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}>
                Your Trusted Partner in Financial Security
              </h1>
              <p className="lead mb-5 mx-auto" style={{ 
                maxWidth: '700px',
                fontSize: '1.25rem',
                lineHeight: '1.7',
                opacity: '0.95'
              }}>
                INSURVEST is a comprehensive financial advisory platform helping individuals and businesses 
                navigate the complex world of insurance, investments, and retirement planning with confidence and clarity.
              </p>
              {/* Trust Indicators */}
              <div className="trust-indicators d-flex flex-wrap justify-content-center align-items-center gap-4 mt-5">
                <div className="trust-item d-flex align-items-center bg-white bg-opacity-10 px-4 py-3 rounded-pill backdrop-blur">
                  <i className="bi bi-people-fill me-2 fs-5"></i>
                  <span className="fw-semibold">10,000+ Happy Clients</span>
                </div>
                <div className="trust-item d-flex align-items-center bg-white bg-opacity-10 px-4 py-3 rounded-pill backdrop-blur">
                  <i className="bi bi-currency-rupee me-2 fs-5"></i>
                  <span className="fw-semibold">₹50Cr+ Policies Sold</span>
                </div>
                <div className="trust-item d-flex align-items-center bg-white bg-opacity-10 px-4 py-3 rounded-pill backdrop-blur">
                  <i className="bi bi-award me-2 fs-5"></i>
                  <span className="fw-semibold">12+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0" style={{ height: '100px', background: 'linear-gradient(to bottom, transparent, white)' }}></div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4">
            {/* Mission */}
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '20px', transition: 'all 0.3s ease' }}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-3 p-3 me-3">
                      <i className="bi bi-bullseye text-primary fs-3"></i>
                    </div>
                    <h3 className="h4 fw-bold mb-0">Our Mission</h3>
                  </div>
                  <p className="text-muted mb-0 lh-lg" style={{ fontSize: '15px' }}>
                    To empower individuals and businesses with transparent, comprehensive financial solutions 
                    that protect their present and secure their future through trusted partnerships and 
                    personalized advisory services.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '20px', transition: 'all 0.3s ease' }}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success bg-opacity-10 rounded-3 p-3 me-3">
                      <i className="bi bi-eye text-success fs-3"></i>
                    </div>
                    <h3 className="h4 fw-bold mb-0">Our Vision</h3>
                  </div>
                  <p className="text-muted mb-0 lh-lg" style={{ fontSize: '15px' }}>
                    To become India's most trusted financial advisory platform, recognized for integrity, 
                    innovation, and unwavering commitment to client success in every financial decision.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '20px', transition: 'all 0.3s ease' }}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-info bg-opacity-10 rounded-3 p-3 me-3">
                      <i className="bi bi-heart text-info fs-3"></i>
                    </div>
                    <h3 className="h4 fw-bold mb-0">Our Values</h3>
                  </div>
                  <p className="text-muted mb-0 lh-lg" style={{ fontSize: '15px' }}>
                    Integrity, transparency, client-first approach, and continuous innovation guide every 
                    interaction. We believe in building relationships, not just transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="pe-lg-4">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                  Our Philosophy
                </span>
                <h2 className="display-5 fw-bold mb-4" style={{ lineHeight: '1.3' }}>
                  Building Lasting Financial Relationships
                </h2>
                <p className="fs-5 text-muted mb-4 lh-lg">
                  At INSURVEST, we believe financial planning is not just about products—it's about 
                  building lasting relationships. From onboarding to renewals, investments to claims 
                  support, we stay with you at every step of your financial journey.
                </p>
                <div className="bg-light rounded-4 p-4 border-start border-4 border-primary">
                  <p className="mb-0 fst-italic text-dark fs-5 lh-base">
                    <i className="bi bi-quote text-primary me-2"></i>
                    "Protect what matters most, grow your wealth responsibly, and plan for a secure 
                    future with confidence."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="text-center p-4 bg-gradient rounded-4" style={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    minHeight: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-shield-check fs-1 mb-2"></i>
                    <h5 className="fw-bold mb-0">Trusted</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 bg-light rounded-4" style={{ 
                    minHeight: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-graph-up-arrow text-primary fs-1 mb-2"></i>
                    <h5 className="fw-bold mb-0">Growth</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 bg-light rounded-4" style={{ 
                    minHeight: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-people text-primary fs-1 mb-2"></i>
                    <h5 className="fw-bold mb-0">Partnership</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 bg-gradient rounded-4" style={{ 
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white',
                    minHeight: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-lightbulb fs-1 mb-2"></i>
                    <h5 className="fw-bold mb-0">Innovation</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-5">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                  Our Services
                </span>
                <h2 className="display-5 fw-bold mb-3">
                  Comprehensive Financial Solutions
                </h2>
                <p className="lead text-muted mb-0 mx-auto" style={{ maxWidth: '600px' }}>
                  Explore our wide range of services designed for your financial well-being
                </p>
              </div>
            </div>
          </div>

          {/* Two Column Layout: Tabs on Left, Accordion Content on Right */}
          <div className="row">
            {/* Left Column - Tabs */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="nav flex-column nav-pills" id="servicesTab" role="tablist">
                {Object.entries(serviceCategories).map(([key, category]) => (
                  <button
                    key={key}
                    className={`nav-link text-start mb-3 rounded-4 py-4 px-4 ${activeTab === key ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(key);
                      setOpenAccordion(0);
                    }}
                    type="button"
                    role="tab"
                    style={{
                      backgroundColor: activeTab === key ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
                      background: activeTab === key ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
                      color: activeTab === key ? 'white' : '#495057',
                      border: activeTab === key ? 'none' : '2px solid #e9ecef',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      boxShadow: activeTab === key ? '0 10px 30px rgba(102, 126, 234, 0.3)' : '0 2px 10px rgba(0,0,0,0.05)'
                    }}
                  >
                    <i className={`${category.icon} me-3 fs-4`}></i>
                    <span style={{ fontSize: '16px' }}>{category.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Accordion Content */}
            <div className="col-lg-8">
              <div className="tab-content">
                {Object.entries(serviceCategories).map(([key, category]) => (
                  <div
                    key={key}
                    className={`tab-pane fade ${activeTab === key ? 'show active' : ''}`}
                    role="tabpanel"
                  >
                    <div className="accordion" id={`accordion-${key}`}>
                      {category.services.map((service, index) => (
                        <div
                          key={index}
                          className="accordion-item mb-3 border-0"
                          style={{
                            borderRadius: '16px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <h2 className="accordion-header" id={`heading-${key}-${index}`}>
                            <button
                              className={`accordion-button ${openAccordion === index && activeTab === key ? '' : 'collapsed'}`}
                              type="button"
                              onClick={() => {
                                setOpenAccordion(openAccordion === index ? -1 : index);
                              }}
                              aria-expanded={openAccordion === index && activeTab === key}
                              aria-controls={`collapse-${key}-${index}`}
                              style={{
                                backgroundColor: openAccordion === index && activeTab === key ? '#f8f9fa' : 'white',
                                border: 'none',
                                boxShadow: 'none',
                                fontWeight: 600,
                                fontSize: '18px',
                                padding: '1.5rem'
                              }}
                            >
                              <div className="d-flex align-items-center w-100">
                                <div className="bg-primary bg-opacity-10 rounded-3 p-2 me-3">
                                  <i className={`${service.icon} text-primary`} style={{ fontSize: '20px' }}></i>
                                </div>
                                <span className="tx-dark">{service.title}</span>
                              </div>
                            </button>
                          </h2>
                          <div
                            id={`collapse-${key}-${index}`}
                            className={`accordion-collapse collapse ${openAccordion === index && activeTab === key ? 'show' : ''}`}
                            aria-labelledby={`heading-${key}-${index}`}
                            data-bs-parent={`#accordion-${key}`}
                          >
                            <div className="accordion-body bg-white" style={{ padding: '1.5rem 1.5rem 1.5rem 4.5rem' }}>
                              <p className="fs-6 text-muted mb-4 lh-lg">{service.description}</p>
                              <ul className="list-unstyled mb-0">
                                {service.details.map((detail, idx) => (
                                  <li key={idx} className="mb-3 d-flex align-items-start">
                                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1 flex-shrink-0" style={{ fontSize: '16px' }}></i>
                                    <span className="text-muted lh-base" style={{ fontSize: '15px' }}>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                Why Choose Us
              </span>
              <h2 className="display-5 fw-bold mb-3">Why Choose INSURVEST?</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                Experience the difference of working with a trusted financial partner
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex p-4 bg-white rounded-4 shadow-sm h-100" style={{ transition: 'all 0.3s ease' }}>
                    <div className="flex-shrink-0 me-4">
                      <div className="bg-primary bg-opacity-10 rounded-4 p-3" style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="bi bi-person-heart text-primary fs-2"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Client-First Approach</h5>
                      <p className="text-muted mb-0 lh-lg">We prioritize your needs and goals above everything else, ensuring every solution is tailored to your unique financial situation.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex p-4 bg-white rounded-4 shadow-sm h-100" style={{ transition: 'all 0.3s ease' }}>
                    <div className="flex-shrink-0 me-4">
                      <div className="bg-success bg-opacity-10 rounded-4 p-3" style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="bi bi-award text-success fs-2"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Trusted Partnerships</h5>
                      <p className="text-muted mb-0 lh-lg">We work with India's leading insurers and financial institutions to bring you the best products and services.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex p-4 bg-white rounded-4 shadow-sm h-100" style={{ transition: 'all 0.3s ease' }}>
                    <div className="flex-shrink-0 me-4">
                      <div className="bg-info bg-opacity-10 rounded-4 p-3" style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="bi bi-headset text-info fs-2"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">End-to-End Support</h5>
                      <p className="text-muted mb-0 lh-lg">From product selection to claims processing, we're with you at every step of your financial journey.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex p-4 bg-white rounded-4 shadow-sm h-100" style={{ transition: 'all 0.3s ease' }}>
                    <div className="flex-shrink-0 me-4">
                      <div className="bg-warning bg-opacity-10 rounded-4 p-3" style={{ width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="bi bi-shield-check text-warning fs-2"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">Complete Transparency</h5>
                      <p className="text-muted mb-0 lh-lg">No hidden charges, clear communication, and full disclosure of all terms and conditions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  <div className="card text-center p-4 border-0 shadow-lg h-100" style={{ 
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white'
                  }}>
                    <i className="bi bi-people-fill mb-3" style={{ fontSize: '48px', opacity: '0.9' }}></i>
                    <h2 className="fw-bold mb-2" style={{ fontSize: '2.5rem' }}>10,000+</h2>
                    <p className="mb-0 fw-semibold">Happy Clients</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-center p-4 border-0 shadow-sm bg-white h-100" style={{ borderRadius: '20px' }}>
                    <i className="bi bi-currency-rupee text-success mb-3" style={{ fontSize: '48px' }}></i>
                    <h2 className="fw-bold text-success mb-2" style={{ fontSize: '2.5rem' }}>₹50Cr+</h2>
                    <p className="mb-0 text-muted fw-semibold">Policies Sold</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-center p-4 border-0 shadow-sm bg-white h-100" style={{ borderRadius: '20px' }}>
                    <i className="bi bi-building text-info mb-3" style={{ fontSize: '48px' }}></i>
                    <h2 className="fw-bold text-info mb-2" style={{ fontSize: '2.5rem' }}>12+</h2>
                    <p className="mb-0 text-muted fw-semibold">Partner Insurers</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-center p-4 border-0 shadow-lg h-100" style={{ 
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white'
                  }}>
                    <i className="bi bi-clock-history mb-3" style={{ fontSize: '48px', opacity: '0.9' }}></i>
                    <h2 className="fw-bold mb-2" style={{ fontSize: '2.5rem' }}>24/7</h2>
                    <p className="mb-0 fw-semibold">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Using FinalCTAStrip Component */}
      <FinalCTAStrip />

      <style jsx>{`
        /* Professional styling enhancements */
        .nav-pills .nav-link:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2) !important;
        }
        
        .card {
          transition: all 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.12) !important;
        }
        
        .accordion-item:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.12) !important;
        }
        
        .backdrop-blur {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        /* Smooth animations */
        .tab-pane {
          animation: fadeIn 0.4s ease-in;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .nav-pills .nav-link {
            font-size: 14px;
            padding: 12px 16px;
          }
          
          .display-3 {
            font-size: 2rem !important;
          }
          
          .display-5 {
            font-size: 1.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUsExtendedBootstrap;