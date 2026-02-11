import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerData = {
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/#contact" },
      { name: "Disclaimers", href: "/disclaimer" }
    ],
    services: [
      { name: "Insurance", href: "/#services" },
      { name: "Investments", href: "/#services" },
      { name: "Retirement", href: "/#services" }
    ],
    resources: [
      { name: "How it works", href: "/#how-it-works" },
      { name: "Our Partners", href: "/#partners" },
      { name: "Testimonials", href: "/#testimonials" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Disclaimer", href: "/disclaimer" }
    ]
  };

  const socialLinks = [
    { name: "Instagram", icon: "bi-instagram", href: "#", color: "hover-instagram" },
    { name: "LinkedIn", icon: "bi-linkedin", href: "#", color: "hover-linkedin" },
    { name: "Facebook", icon: "bi-facebook", href: "#", color: "hover-facebook" },
    { name: "X", icon: "bi-twitter-x", href: "#", color: "hover-twitter" }
  ];

  const contactInfo = {
    phone: "+91 9999999999",
    email: "contact@insurvest.in",
    address: "OFFICE NO 1041A, GAUR CITY MALL, Gautam Buddha Nagar, 201318, Uttar Pradesh",
    whatsapp: "+91 9999999999"
  };

  const isExternal = (href) => /^https?:\/\//.test(href) || href === "#";

  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="row">
            
            {/* Brand Column */}
            <div className="col-lg-4 col-md-6 mb-50 lg-mb-40">
              <div className="footer-brand">
                <div className="brand-logo mb-4">
                  <Link href="/" className="d-inline-block">
                    <Image
                      src="/images/logo/logo_01.jpg"
                      alt="INSURVEST - Insurance Marketing Firm"
                      width={180}
                      height={80}
                      className="footer-logo"
                      style={{width: 'auto'}}
                    />
                  </Link>
                  <p className="brand-tagline fs-14  mb-0 mt-2 fw-500 text-uppercase ls-1">
                    Insurance Marketing Firm
                  </p>
                </div>
                
                <p className="brand-description fs-15  mb-4 lh-base">
                  Your trusted partner in building a secure financial future. 
                  Expert guidance, personalized solutions, and unwavering support 
                  for all your insurance and investment needs.
                </p>

                {/* Social Links */}
                <div className="social-links">
                  <h6 className="social-title fw-600 mb-3 tx-dark">Follow Us</h6>
                  <div className="social-icons d-flex gap-3">
                    {socialLinks.map((social) => (
                      <a 
                        key={social.name}
                        href={social.href}
                        className={`social-icon d-flex align-items-center justify-content-center ${social.color}`}
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   handleLinkClick(social.href);
                        // }}
                        aria-label={social.name}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="col-lg-6 col-md-6 mb-50 lg-mb-40">
              <div className="row">
                
                {/* Company Links */}
                <div className="col-sm-3 col-6 mb-40 sm-mb-30">
                  <div className="footer-nav-group">
                    <h6 className="nav-title fw-600 mb-3 tx-dark">Company</h6>
                    <ul className="nav-links list-unstyled">
                      {footerData.company.map((link) => (
                        <li key={link.name} className="nav-item mb-2">
                          {isExternal(link.href) ? (
                            <a href={link.href} className="nav-link">
                              {link.name}
                            </a>
                          ) : (
                            <Link href={link.href} className="nav-link">
                              {link.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Services Links */}
                <div className="col-sm-3 col-6 mb-40 sm-mb-30">
                  <div className="footer-nav-group">
                    <h6 className="nav-title fw-600 mb-3 tx-dark">Services</h6>
                    <ul className="nav-links list-unstyled">
                      {footerData.services.map((link) => (
                        <li key={link.name} className="nav-item mb-2">
                          {isExternal(link.href) ? (
                            <a href={link.href} className="nav-link">
                              {link.name}
                            </a>
                          ) : (
                            <Link href={link.href} className="nav-link">
                              {link.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Resources Links */}
                <div className="col-sm-3 col-6 mb-40 sm-mb-30">
                  <div className="footer-nav-group">
                    <h6 className="nav-title fw-600 mb-3 tx-dark">Resources</h6>
                    <ul className="nav-links list-unstyled">
                      {footerData.resources.map((link) => (
                        <li key={link.name} className="nav-item mb-2">
                          {isExternal(link.href) ? (
                            <a href={link.href} className="nav-link">
                              {link.name}
                            </a>
                          ) : (
                            <Link href={link.href} className="nav-link">
                              {link.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Legal Links */}
                <div className="col-sm-3 col-6 mb-40 sm-mb-30">
                  <div className="footer-nav-group">
                    <h6 className="nav-title fw-600 mb-3 tx-dark">Legal</h6>
                    <ul className="nav-links list-unstyled">
                      {footerData.legal.map((link) => (
                        <li key={link.name} className="nav-item mb-2">
                          {isExternal(link.href) ? (
                            <a href={link.href} className="nav-link">
                              {link.name}
                            </a>
                          ) : (
                            <Link href={link.href} className="nav-link">
                              {link.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-2 col-md-12">
              <div className="footer-contact">
                <h6 className="contact-title fw-600 mb-3 tx-dark">Get in Touch</h6>
                
                <div className="contact-items">
                  {/* Phone */}
                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="contact-link"
                      // onClick={() => handleContactClick('phone', contactInfo.phone)}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="contact-link"
                      // onClick={() => handleContactClick('email', contactInfo.email)}
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3">
                      <i className="bi bi-whatsapp"></i>
                    </div>
                    <a 
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                      className="contact-link"
                      // onClick={() => handleContactClick('whatsapp', contactInfo.whatsapp)}
                    >
                      WhatsApp
                    </a>
                  </div>

                  {/* Address */}
                  <div className="contact-item d-flex align-items-start mb-3">
                    <div className="contact-icon me-3 mt-1">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <span className="contact-text fs-14  lh-base">
                      {contactInfo.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12 mb-3">
              <p className="disclaimer-text fs-11 text-white mb-2 fw-600">
                BEWARE OF SPURIOUS PHONE CALLS AND FICTITIOUS / FRAUDULENT OFFERS
              </p>
              <p className="disclaimer-text fs-11 text-white mb-0">
                IRDAI or its officials do not involve in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.
              </p>
            </div>
            <div className="col-md-6">
              <p className="copyright-text fs-14  mb-0">
                © {new Date().getFullYear()} INSURVEST. All rights reserved. 
                <span className="ms-2">IRDAI Reg. No.: IMF09670920250855</span>
              </p>
            </div>
            <div className="col-md-6 text-md-end text-start mt-md-0 mt-3">
              <p className="disclaimer-text fs-12  mb-0">
                Mutual fund investments are subject to market risks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg-shape shape-1"></div>
      <div className="footer-bg-shape shape-2"></div>
    </footer>
  );
};

export default Footer;