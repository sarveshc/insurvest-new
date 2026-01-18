"use client";
import React from 'react';
import Link from 'next/link';

const AboutUsBootstrap = () => {
  const services = [
    {
      icon: 'bi-heart-pulse',
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage with cashless claims at 10,000+ hospitals',
      features: ['Coverage for family in India', 'Tax benefits under 80D', 'Pre/post hospitalization'],
      color: 'primary'
    },
    {
      icon: 'bi-shield-check',
      title: 'Term Life Insurance',
      description: 'High-value pure protection plans with global claim payout',
      features: ['Low premiums', 'Tax-free payout', 'Video/tele medicals'],
      color: 'info'
    },
    {
      icon: 'bi-piggy-bank',
      title: 'Endowment Plans',
      description: 'Insurance cum savings for future financial goals',
      features: ['Dual benefit plans', 'Bonus additions', 'Tax benefits'],
      color: 'success'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'ULIPs',
      description: 'Market-linked investments with life cover',
      features: ['Fund flexibility', 'Tax-free maturity', 'Partial withdrawals'],
      color: 'primary'
    },
    {
      icon: 'bi-cash-stack',
      title: 'Mutual Funds',
      description: 'Professional fund management for wealth creation',
      features: ['SIP options', 'ELSS tax saving', 'Diversified portfolio'],
      color: 'info'
    },
    {
      icon: 'bi-calendar-check',
      title: 'Retirement Planning',
      description: 'NPS, annuity plans for secure retirement',
      features: ['Government backed', 'Regular pension', 'Tax efficient'],
      color: 'success'
    }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container py-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                About <span className="text-teal">INSURVEST</span>
              </h1>
              <p className="lead mb-4">
                Insurvest is a trusted financial advisory platform that helps individuals and businesses 
                make confident decisions across insurance, investments, and retirement planning.
              </p>
              <p className="fs-5 text-muted mb-5">
                We bring together protection and wealth solutions under one roof, with a clear focus on 
                simplicity, transparency, and long-term value.
              </p>
              <div className="d-flex flex-wrap gap-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-teal me-2 fs-5"></i>
                  <span className="fw-medium">Client-First Approach</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-teal me-2 fs-5"></i>
                  <span className="fw-medium">Trusted Partnerships</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-teal me-2 fs-5"></i>
                  <span className="fw-medium">End-to-End Support</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center position-relative">
                <div className="bg-teal-light rounded-circle position-absolute top-50 start-50 translate-middle" 
                     style={{ width: '400px', height: '400px', zIndex: 0 }}></div>
                <img src="/images/about-illustration.svg" alt="About INSURVEST" className="img-fluid position-relative" style={{ zIndex: 1 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-4">Our Client-First Approach</h2>
              <p className="fs-5 text-muted">
                We take time to understand your financial goals, risk profile, and life stage before 
                recommending suitable solutions.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body p-4">
                  <div className="bg-teal bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-search-heart text-white fs-1"></i>
                  </div>
                  <h4 className="fw-semibold mb-3">Understand</h4>
                  <p className="text-muted">We listen to your goals and assess your financial needs comprehensively</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body p-4">
                  <div className="bg-cyan bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-lightbulb text-white fs-1"></i>
                  </div>
                  <h4 className="fw-semibold mb-3">Recommend</h4>
                  <p className="text-muted">We suggest tailored solutions from trusted partners</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body p-4">
                  <div className="bg-teal-dark bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-infinity text-white fs-1"></i>
                  </div>
                  <h4 className="fw-semibold mb-3">Support</h4>
                  <p className="text-muted">We stay with you throughout your journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-5 bg-light">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <i className="bi bi-bullseye text-teal mb-4" style={{ fontSize: '48px' }}></i>
                  <h3 className="fw-bold mb-4">Our Mission</h3>
                  <p className="fs-4 text-muted fst-italic">
                    "To help you protect what matters most, grow your wealth responsibly, and plan for a 
                    secure future with confidence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Our Services at a Glance</h2>
              <p className="fs-5 text-muted">Comprehensive financial solutions tailored to your needs</p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0 service-card">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <i className={`${service.icon} text-teal`} style={{ fontSize: '40px' }}></i>
                    </div>
                    <h4 className="fw-semibold mb-3">{service.title}</h4>
                    <p className="text-muted mb-3">{service.description}</p>
                    <ul className="list-unstyled mb-0">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-center">
                          <i className="bi bi-check2 text-teal me-2"></i>
                          <small>{feature}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/services" className="btn btn-teal btn-lg px-5">
              Explore All Services
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container py-lg-5">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <i className="bi bi-people-fill text-teal mb-3" style={{ fontSize: '40px' }}></i>
                <h3 className="fw-bold text-teal">10K+</h3>
                <p className="text-muted fw-medium mb-0">Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <i className="bi bi-currency-rupee text-teal mb-3" style={{ fontSize: '40px' }}></i>
                <h3 className="fw-bold text-teal">₹50Cr+</h3>
                <p className="text-muted fw-medium mb-0">Policies Sold</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <i className="bi bi-building text-teal mb-3" style={{ fontSize: '40px' }}></i>
                <h3 className="fw-bold text-teal">12+</h3>
                <p className="text-muted fw-medium mb-0">Partner Insurers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <i className="bi bi-clock-history text-teal mb-3" style={{ fontSize: '40px' }}></i>
                <h3 className="fw-bold text-teal">24hrs</h3>
                <p className="text-muted fw-medium mb-0">Claim Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-teal text-white">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fw-bold mb-4">Ready to Secure Your Financial Future?</h2>
              <p className="fs-5 mb-5 opacity-90">
                Join thousands of satisfied clients who trust INSURVEST
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link href="/contact" className="btn btn-light btn-lg px-5">
                  Get Started Today
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link href="/services" className="btn btn-outline-light btn-lg px-5">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Teal color scheme */
        .text-teal {
          color: #00BFA5 !important;
        }
        
        .bg-teal {
          background-color: #00BFA5 !important;
        }
        
        .bg-teal-light {
          background-color: rgba(0, 191, 165, 0.1) !important;
        }
        
        .bg-teal-dark {
          background-color: #00a693 !important;
        }
        
        .bg-cyan {
          background-color: #00ACC1 !important;
        }
        
        .btn-teal {
          background-color: #00BFA5;
          border-color: #00BFA5;
          color: white;
        }
        
        .btn-teal:hover {
          background-color: #00a693;
          border-color: #00a693;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 0.5rem 1rem rgba(0,191,165,0.3);
        }
        
        /* Card hover effects */
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
          
          .display-5 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUsBootstrap;