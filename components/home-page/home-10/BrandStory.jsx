const BrandStory = () => {
  const logoElements = [
    {
      id: 1,
      icon: "bi-umbrella-fill",
      title: "Umbrella",
      description: "Insurance coverage and protection",
      iconColor: "text-primary",
      bgColor: "bg-primary-soft"
    },
    {
      id: 2,
      icon: "bi-bar-chart-fill",
      title: "Bars", 
      description: "Growing investments and wealth",
      iconColor: "text-success",
      bgColor: "bg-success-soft"
    },
    {
      id: 3,
      icon: "bi-arrow-up-right",
      title: "Arrow",
      description: "Clear direction toward financial security",
      iconColor: "text-info",
      bgColor: "bg-info-soft"
    },
    {
      id: 4,
      icon: "bi-plus-circle-fill",
      title: "Insur + Vest",
      description: "Security + Smart Investing",
      iconColor: "text-warning",
      bgColor: "bg-warning-soft"
    }
  ];

  return (
    <section className="brand-story-section pt-50 pb-50  py-100 lg-py-80">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Logo Side */}
          <div className="col-lg-5 col-md-6  mb-50 lg-mb-40 md-mb-30">
            <div className="logo-showcase text-center">
              <div className="logo-container">
                <div className="logo-wrapper">
                  {/* INSURVEST Logo Recreation */}
                  <div className="brand-logo d-inline-flex align-items-center justify-content-center">
                    <div className="logo-graphic position-relative">
                      {/* Umbrella */}
                      <div className="logo-umbrella">
                        <i className="bi bi-umbrella-fill"></i>
                      </div>
                      {/* Growth Bars */}
                      <div className="logo-bars">
                        <div className="bar bar-1"></div>
                        <div className="bar bar-2"></div>
                        <div className="bar bar-3"></div>
                        <div className="bar bar-4"></div>
                      </div>
                      {/* Arrow */}
                      <div className="logo-arrow">
                        <i className="bi bi-arrow-up-right"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div className="brand-text mt-4">
                    <h3 className="brand-name fw-bold mb-2">
                      <span className="insur-text">INSUR</span>
                      <span className="vest-text">VEST</span>
                    </h3>
                    <p className="brand-tagline fs-14 text-muted mb-0 fw-500 text-uppercase ls-2">
                      Insurance Marketing Firm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="col-lg-7 col-md-6">
            <div className="brand-story-content ps-lg-4">
              <div className="content-header mb-50 lg-mb-40">
                <h2 className="section-heading fw-bold tx-dark mb-20">
                  What Our Logo Stands For
                </h2>
                <p className="section-intro fs-18 text-muted lh-base">
                  Every element tells a story of protection, growth, and guidance.
                </p>
              </div>

              <div className="logo-elements-list">
                {logoElements.map((element, index) => (
                  <div 
                    key={element.id} 
                    className="logo-element-item d-flex align-items-start mb-4"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="element-icon-wrapper me-4 flex-shrink-0">
                      <div className={`element-icon d-flex align-items-center justify-content-center ${element.bgColor} ${element.iconColor}`}>
                        <i className={`${element.icon} fs-18`}></i>
                      </div>
                    </div>
                    
                    <div className="element-content flex-grow-1">
                      <h5 className="element-title fw-bold mb-2 tx-dark">
                        {element.title}
                      </h5>
                      <p className="element-description fs-16 text-muted mb-0 lh-base">
                        {element.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="brand-promise mt-50 lg-mt-40">
                <div className="promise-box p-4">
                  <div className="d-flex align-items-center">
                    <div className="promise-icon me-3">
                      <i className="bi bi-heart-fill fs-24 text-danger"></i>
                    </div>
                    <div className="promise-text">
                      <p className="fs-18 fw-600 tx-dark mb-0 fst-italic">
                        "It's not just a logo—it's our promise to you."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="bg-decoration circle-1"></div>
      <div className="bg-decoration circle-2"></div>
    </section>
  );
};

export default BrandStory;