const OurPartners = () => {
  // Tie-up partner logos from folder (HDFC Life, HDFC Ergo, ICICI Prudential, Edelweiss Tokio, Universal Sompo, Digit, Royal Sundaram, Star, Aviva - removed per client)
  const partners = [
    {
      id: 1,
      name: "Care Health",
      logo: "/images/partners/4.bd882852.svg",
      category: "Health Insurance",
      description: "Specialized health coverage"
    },
    {
      id: 2,
      name: "Shriram Life",
      logo: "/images/partners/6.0147ba86.svg",
      category: "Life Insurance",
      description: "Affordable life insurance"
    },
    {
      id: 3,
      name: "Niva Bupa",
      logo: "/images/partners/7.ac0cca21.svg",
      category: "Health Insurance",
      description: "Premium health insurance"
    },
    {
      id: 4,
      name: "TATA AIG",
      logo: "/images/partners/p5.559fa91d.png",
      category: "General Insurance",
      description: "Trusted TATA brand"
    },
    // Tie-up partners from logo folder
    { id: 5, name: "Partner 5", logo: "/images/logo/Plogo-1.png", category: "Insurance", description: "Trusted partner" },
    { id: 6, name: "Partner 6", logo: "/images/logo/Plogo-2.png", category: "Insurance", description: "Trusted partner" },
    { id: 7, name: "Partner 7", logo: "/images/logo/Plogo-3.png", category: "Insurance", description: "Trusted partner" },
    { id: 8, name: "Partner 8", logo: "/images/logo/Plogo-4.png", category: "Insurance", description: "Trusted partner" },
    { id: 9, name: "Partner 9", logo: "/images/logo/Plogo-5.png", category: "Insurance", description: "Trusted partner" },
    { id: 10, name: "Partner 10", logo: "/images/logo/Plogo-6.png", category: "Insurance", description: "Trusted partner" },
    { id: 11, name: "Partner 11", logo: "/images/logo/Plogo-7.png", category: "Insurance", description: "Trusted partner" }
  ];

  return (
    <section id="partners" className="partners-section pt-100 pb-100 lg-pt-80 lg-pb-80">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-70 lg-mb-50">
              <h2 className="section-heading fw-bold tx-dark mb-20">
                Our Partners
              </h2>
              <p className="section-subtitle fs-18 text-muted mb-0 mx-auto" style={{maxWidth: '600px'}}>
                We've partnered with India's most trusted insurance companies to bring you 
                the best coverage options and competitive rates
              </p>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="partners-wrapper">
          <div className="row gx-4 gy-4 justify-content-center">
            {partners.map((partner) => (
              <div key={partner.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-card h-100">
                  <div className="partner-logo-wrapper d-flex align-items-center justify-content-center h-100">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo"
                      title={partner.description}
                    />
                  </div>
                  {/* <div className="partner-overlay">
                    <div className="overlay-content text-center">
                      <h6 className="partner-name fw-600 text-white mb-1">
                        {partner.name}
                      </h6>
                      <span className="partner-category fs-12 text-white-50">
                        {partner.category}
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators-wrapper mt-60 lg-mt-40">
          <div className="row gx-4 gy-3 text-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="trust-indicator">
                <div className="indicator-icon mb-2">
                  <i className="bi bi-building fs-24 text-primary"></i>
                </div>
                <h4 className="indicator-value fw-bold tx-dark mb-1">10+</h4>
                <p className="indicator-label fs-14 text-muted mb-0">Insurance Partners</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="trust-indicator">
                <div className="indicator-icon mb-2">
                  <i className="bi bi-shield-check fs-24 text-success"></i>
                </div>
                <h4 className="indicator-value fw-bold tx-dark mb-1">100%</h4>
                <p className="indicator-label fs-14 text-muted mb-0">Claim Support</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="trust-indicator">
                <div className="indicator-icon mb-2">
                  <i className="bi bi-people fs-24 text-info"></i>
                </div>
                <h4 className="indicator-value fw-bold tx-dark mb-1">1000+</h4>
                <p className="indicator-label fs-14 text-muted mb-0">Happy Families</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-60 lg-mt-40">
          <div className="col-12 text-center">
            <p className="cta-text fs-16 text-muted mb-4">
              Can't find your preferred insurer? Don't worry!
            </p>
            <button className="btn btn-outline-primary btn-lg px-5 py-3 fw-600">
              View All Partners
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="bg-shape shape-one"></div>
      <div className="bg-shape shape-two"></div>
    </section>
  );
};

export default OurPartners;