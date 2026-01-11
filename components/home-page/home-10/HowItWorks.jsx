const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Discover",
      description: "Tell us your goals & needs",
      icon: "bi-search-heart",
      iconColor: "text-primary",
      bgColor: "bg-primary-soft"
    },
    {
      id: 2,
      number: "02", 
      title: "Diagnose",
      description: "Risk profiling & financial assessment",
      icon: "bi-clipboard-data",
      iconColor: "text-success",
      bgColor: "bg-success-soft"
    },
    {
      id: 3,
      number: "03",
      title: "Design", 
      description: "Custom plan crafted by experts",
      icon: "bi-palette",
      iconColor: "text-info",
      bgColor: "bg-info-soft"
    },
    {
      id: 4,
      number: "04",
      title: "Deliver",
      description: "Get protected, invested, and supported", 
      icon: "bi-rocket-takeoff",
      iconColor: "text-warning",
      bgColor: "bg-warning-soft"
    }
  ];

  const handleConsultationClick = () => {
    console.log("Book consultation clicked");
    // Add your booking logic here
  };

  return (
    <section className="how-it-works-section pt-50 pb-50  py-100 lg-py-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-70 lg-mb-50">
              <h2 className="section-heading fw-bold tx-dark mb-20">
                Simple. Smart. Strategic.
              </h2>
              <p className="section-subtitle fs-18 text-muted mb-0">
                Our proven 4-step process to secure your financial future
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container position-relative mb-60 lg-mb-40">
          <div className="timeline-line"></div>
          
          <div className="row gx-0">
            {steps.map((step, index) => (
              <div key={step.id} className="col-lg-3 col-md-6 col-sm-6">
                <div className="timeline-step text-center position-relative">
                  
                  {/* Step Number */}
                  <div className="step-number-wrapper mb-4">
                    <div className="step-number mx-auto d-flex align-items-center justify-content-center fw-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Icon */}
                  <div className="step-icon-wrapper mb-4">
                    <div className={`step-icon mx-auto d-flex align-items-center justify-content-center ${step.bgColor} ${step.iconColor}`}>
                      <i className={`${step.icon} fs-28`}></i>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="step-content">
                    <h4 className="step-title fw-bold mb-2 tx-dark">
                      {step.title}
                    </h4>
                    <p className="step-description fs-15 text-muted mb-0 px-2">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="step-connector d-lg-block d-none">
                      <i className="bi bi-arrow-right fs-20"></i>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="row">
          <div className="col-12 text-center">
            <div className="cta-consultation-wrapper">
              <button 
                className="btn btn-primary btn-lg px-5 py-3 fw-600 text-uppercase ls-1 cta-consultation"
                // onClick={handleConsultationClick}
              >
                Book a Free Consultation
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
              <p className="cta-note fs-14 text-muted mt-3 mb-0">
                No obligation • 30-minute expert consultation • Personalized insights
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="bg-shape shape-left"></div>
      <div className="bg-shape shape-right"></div>
    </section>
  );
};

export default HowItWorks;