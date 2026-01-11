"use client";

import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleAdvisorClick = () => {
    console.log("Talk to Advisor clicked");
    // Add your advisor contact logic here
  };

  const handleFreePlanClick = () => {
    console.log("Free Financial Plan clicked");
    // Add your free plan logic here
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`theme-main-menu sticky-menu theme-menu-enhanced ${
          navbar ? "fixed scrolled" : ""
        }`}
      >
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            
            {/* Logo Section */}
            <div className="logo order-lg-0">
              <Link href="/" className="d-block logo-link">
                <div className="logo-wrapper d-flex align-items-center">
                  {/* Custom INSURVEST Logo */}
                  <Image
                src="/images/logo/logo_01.jpg"
                alt="logo"
                width={200}
                height={90}
              />
            
                 
                </div>
              </Link>
            </div>

            {/* Navigation Menu - Desktop */}
            <div className="main-nav order-lg-1 d-none d-lg-block">
              <MainMenu />
            </div>

            {/* CTA Buttons Section */}
            <div className="header-cta-section order-lg-2 d-flex align-items-center">
              
              {/* Desktop CTA Buttons */}
              <div className="cta-buttons d-none d-lg-flex align-items-center gap-3">
                <button 
                  className="btn btn-outline-primary btn-sm cta-advisor px-3 py-2 fw-500"
                  onClick={handleAdvisorClick}
                >
                  <i className="bi bi-telephone-fill me-2 fs-12"></i>
                  Talk to an Advisor
                </button>
                
                <button 
                  className="btn btn-primary btn-sm cta-free-plan px-3 py-2 fw-500"
                  onClick={handleFreePlanClick}
                >
                  <i className="bi bi-file-earmark-text me-2 fs-12"></i>
                  Free Financial Plan
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="mobile-menu-toggle d-lg-none ms-3"
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
              >
                <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                  <span className="line line-1"></span>
                  <span className="line line-2"></span>
                  <span className="line line-3"></span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-nav-wrapper">
              <MainMenu />
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="mobile-cta-buttons mt-4">
              <button 
                className="btn btn-outline-primary btn-lg w-100 mb-3 cta-advisor-mobile"
                onClick={() => {
                  handleAdvisorClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className="bi bi-telephone-fill me-2"></i>
                Talk to an Advisor Now
              </button>
              
              <button 
                className="btn btn-primary btn-lg w-100 cta-free-plan-mobile"
                onClick={() => {
                  handleFreePlanClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className="bi bi-file-earmark-text me-2"></i>
                Get Your Free Financial Plan
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="mobile-contact-info mt-4 pt-4 border-top">
              <div className="contact-item d-flex align-items-center mb-3">
                <i className="bi bi-telephone-fill me-3 text-primary"></i>
                <a href="tel:+919999999999" className="contact-link">
                  +91 9999999999
                </a>
              </div>
              <div className="contact-item d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill me-3 text-primary"></i>
                <a href="mailto:info@insurvest.com" className="contact-link">
                  info@insurvest.com
                </a>
              </div>
              <div className="contact-item d-flex align-items-center">
                <i className="bi bi-whatsapp me-3 text-success"></i>
                <a href="https://wa.me/919999999999" className="contact-link">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;