const ServicesSnapshot = () => {
  const services = [
    {
      id: 1,
      icon: "bi-shield-fill-plus",
      title: "Insurance",
      services: ["Life", "Term", "Health", "Motor", "Travel"],
      description: "Protect what matters most",
      bgColor: "bg-primary-light",
      iconColor: "text-primary",
      hoverColor: "hover-primary"
    },
    {
      id: 2,
      icon: "bi-graph-up",
      title: "Mutual Funds",
      services: ["SIPs", "Lumpsum", "ELSS", "Portfolio Review"],
      description: "Build long-term wealth",
      bgColor: "bg-success-light",
      iconColor: "text-success",
      hoverColor: "hover-success"
    },
    {
      id: 3,
      icon: "bi-piggy-bank",
      title: "Retirement Plans",
      services: ["NPS", "Pension Plans", "Annuities"],
      description: "Plan a stress-free retirement",
      bgColor: "bg-info-light",
      iconColor: "text-info",
      hoverColor: "hover-info"
    },
    {
      id: 4,
      icon: "bi-bank",
      title: "Other Financial Products",
      services: ["SEBI", "RBI", "India Post Schemes"],
      description: "Smart options for every life stage",
      bgColor: "bg-warning-light",
      iconColor: "text-warning",
      hoverColor: "hover-warning"
    }
  ];

  const handleServiceClick = (serviceTitle) => {
    console.log(`Clicked on ${serviceTitle}`);
    // Add your navigation logic here
  };

  return (
    <section className="services-snapshot-section pt-50 pb-50 py-100 lg-py-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-70 lg-mb-50">
              <h2 className="section-heading fw-bold tx-dark mb-20">
                Our Services at a Glance
              </h2>
              <p className="section-subtitle fs-20 text-muted mb-0 fw-500">
                One Platform, Many Solutions
              </p>
            </div>
          </div>
        </div>

        <div className="row gx-4 gy-4 mb-60 lg-mb-40">
          {services.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-6">
              <div 
                className={`service-card h-100 cursor-pointer ${service.hoverColor}`}
                // onClick={() => handleServiceClick(service.title)}
                role="button"
                tabIndex={0}
                // onKeyPress={(e) => {
                //   if (e.key === 'Enter' || e.key === ' ') {
                //     handleServiceClick(service.title);
                //   }
                // }}
              >
                <div className="service-card-inner p-4">
                  <div className="service-icon-wrapper mb-4">
                    <div className={`service-icon rounded-circle d-flex align-items-center justify-content-center ${service.bgColor} ${service.iconColor}`}>
                      <i className={`${service.icon} fs-28`}></i>
                    </div>
                  </div>

                  <h4 className="service-title fw-bold mb-3 tx-dark">
                    {service.title}
                  </h4>

                  <div className="service-list mb-4">
                    {service.services.map((item, index) => (
                      <span key={index} className="service-tag">
                        {item}
                        {index < service.services.length - 1 && (
                          <span className="separator">|</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="service-description d-flex align-items-center">
                    <i className="bi bi-arrow-right-short fs-20 me-2 arrow-icon"></i>
                    <span className="fs-16 fw-500 text-muted">
                      {service.description}
                    </span>
                  </div>
                </div>

                <div className="service-card-overlay"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row">
          <div className="col-12 text-center">
            <button className="btn btn-outline-primary btn-lg px-5 py-3 fw-600 text-uppercase ls-1 cta-all-services">
              See All Services
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="bg-decoration shape-one"></div>
      <div className="bg-decoration shape-two"></div>
    </section>
  );
};

export default ServicesSnapshot;