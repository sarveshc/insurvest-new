const Footer = () => {
  const footerData = {
    company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ],
    services: [
      { name: "Insurance", href: "/insurance" },
      { name: "Investments", href: "/investments" },
      { name: "Retirement", href: "/retirement" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "FAQs", href: "/faqs" },
      { name: "Calculators", href: "/calculators" }
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Regulatory Disclosures", href: "/disclosures" }
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
    email: "info@insurvest.com",
    address: "123 Financial District, Business Park, Ghaziabad, UP 201001",
    whatsapp: "+91 9999999999"
  };

  const handleLinkClick = (href) => {
    console.log(`Navigating to: ${href}`);
    // Add your navigation logic here
  };

  const handleContactClick = (type, value) => {
    console.log(`Contact clicked: ${type} - ${value}`);
    // Add your contact logic here
  };

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
                  <h3 className="brand-name fw-bold mb-3">
                    <span className="insur-text">INSUR</span>
                    <span className="vest-text">VEST</span>
                  </h3>
                  <p className="brand-tagline fs-14  mb-0 fw-500 text-uppercase ls-1">
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
                          <a 
                            href={link.href}
                            className="nav-link"
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   handleLinkClick(link.href);
                            // }}
                          >
                            {link.name}
                          </a>
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
                          <a 
                            href={link.href}
                            className="nav-link"
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   handleLinkClick(link.href);
                            // }}
                          >
                            {link.name}
                          </a>
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
                          <a 
                            href={link.href}
                            className="nav-link"
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   handleLinkClick(link.href);
                            // }}
                          >
                            {link.name}
                          </a>
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
                          <a 
                            href={link.href}
                            className="nav-link"
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   handleLinkClick(link.href);
                            // }}
                          >
                            {link.name}
                          </a>
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
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright-text fs-14  mb-0">
                © {new Date().getFullYear()} INSURVEST. All rights reserved. 
                <span className="ms-2">IRDAI Reg. No.: IMF/XX/XXXXX</span>
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