const FinalCTAStrip = () => {
  const handleTalkToAdvisor = () => {
    console.log("Talk to Advisor clicked");
    // Add your advisor contact logic here
  };

  const handleFreePlan = () => {
    console.log("Free Financial Plan clicked");
    // Add your free plan logic here
  };

  return (
    <section className="final-cta-strip-section">
      <div className="container">
        <div className="cta-strip-wrapper">
          <div className="row align-items-center">
            
            {/* Content Column */}
            <div className="col-lg-7 col-md-6 mb-40 md-mb-30">
              <div className="cta-content">
                <h2 className="cta-headline fw-bold tx-dark mb-20">
                  Ready to Take Control of Your{" "}
                  <span className="highlight-text">Financial Future?</span>
                </h2>
                <p className="cta-subtext fs-18 text-muted mb-0 pe-lg-4">
                  Join thousands of satisfied clients who've secured their tomorrow. 
                  Start your journey to financial freedom today.
                </p>
              </div>
            </div>

            {/* CTA Buttons Column */}
            <div className="col-lg-5 col-md-6">
              <div className="cta-buttons-wrapper text-lg-end text-center">
                <div className="cta-buttons d-flex flex-lg-column flex-md-column flex-sm-row flex-column gap-3">
                  
                  {/* Primary CTA */}
                  <button 
                    className="btn btn-primary btn-lg cta-primary px-4 py-3 fw-600 text-uppercase"
                    // onClick={handleTalkToAdvisor}
                  >
                    <i className="bi bi-telephone-fill me-2"></i>
                    Talk to an Advisor Now
                  </button>

                  {/* Secondary CTA */}
                  <button 
                    className="btn btn-outline-primary btn-lg cta-secondary px-4 py-3 fw-600 text-uppercase"
                    // onClick={handleFreePlan}
                  >
                    <i className="bi bi-file-earmark-text me-2"></i>
                    Get Your Free Financial Plan
                  </button>
                </div>

                {/* Trust Elements */}
                <div className="cta-trust-elements mt-4 text-lg-end text-center">
                  <div className="trust-badges d-flex flex-wrap justify-content-lg-end justify-content-center gap-3">
                    <div className="trust-badge d-flex align-items-center">
                      <i className="bi bi-shield-check fs-14 text-success me-2"></i>
                      <span className="fs-12 text-muted fw-500">100% Secure</span>
                    </div>
                    <div className="trust-badge d-flex align-items-center">
                      <i className="bi bi-clock fs-14 text-info me-2"></i>
                      <span className="fs-12 text-muted fw-500">Quick Response</span>
                    </div>
                    <div className="trust-badge d-flex align-items-center">
                      <i className="bi bi-award fs-14 text-warning me-2"></i>
                      <span className="fs-12 text-muted fw-500">Expert Advice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="cta-bg-shape shape-left"></div>
      <div className="cta-bg-shape shape-right"></div>
      <div className="floating-elements">
        <div className="floating-icon icon-1">
          <i className="bi bi-graph-up-arrow"></i>
        </div>
        <div className="floating-icon icon-2">
          <i className="bi bi-shield-plus"></i>
        </div>
        <div className="floating-icon icon-3">
          <i className="bi bi-piggy-bank"></i>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAStrip;