"use client"
import React from 'react';

const DisclaimerPage = () => {
  return (
    <div className="disclaimer-page">
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '120px 0 60px',
        color: 'white'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <div className="mb-4">
                <span className="badge bg-white text-primary px-4 py-2 rounded-pill fw-semibold mb-3" style={{ fontSize: '14px' }}>
                  Legal Information
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-3" style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}>
                Disclaimer
              </h1>
              <p className="lead mb-0 mx-auto" style={{ 
                maxWidth: '700px',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                opacity: '0.95'
              }}>
                Important information regarding the use of our website and services
              </p>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0" style={{ height: '80px', background: 'linear-gradient(to bottom, transparent, white)' }}></div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card border-0 shadow-sm" style={{ borderRadius: '20px' }}>
                <div className="card-body p-4 p-lg-5">
                  {/* Introduction */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-info-circle text-primary fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">Website Information</h2>
                    </div>
                    <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px', paddingLeft: '60px' }}>
                      www.insurvest.in is a website owned and operated by Insurvest Insurance Marketing Private Limited ("insurvest"). 
                      The purpose of this website is to provide information about insurance products offered by insurance providers ("insurer(s)"). 
                      Information provided on this website may be based on information provided by you as well as third parties such as insurers. 
                      While we strive to provide unbiased and accurate information, we are not responsible for any discrepancies in the information 
                      provided on our website. All information provided on this website is subject to change without notice.
                    </p>
                  </div>

                  <hr className="my-5" />

                  {/* Relationship with Insurers */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-shield-check text-success fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">Relationship with Insurers</h2>
                    </div>
                    <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px', paddingLeft: '60px' }}>
                      Insurvest and its owners are not agents, corporate agents, related party of the insurers, whose products are dealt with 
                      in this website/portal. Insurvest are also not the sub-agents or sub-intermediaries of the agents and intermediaries 
                      of the respective insurers.
                    </p>
                  </div>

                  <hr className="my-5" />

                  {/* Policy Purchase */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-info bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-file-earmark-text text-info fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">Policy Purchase & Application</h2>
                    </div>
                    <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px', paddingLeft: '60px' }}>
                      Insurvest only facilitates the purchase of insurance policies by you. You are solely responsible for the timeliness and 
                      accuracy of all information provided by you and all payments by you. The policies displayed on the website are an invitation 
                      for you to offer the purchase of a policy. When you apply to purchase an insurance policy, even if you make a payment for 
                      the same, you make an offer to the insurer to sell the insurance policy to you. The insurer may, at its own discretion, 
                      accept or reject your offer to purchase a policy with or without providing any reason. The insurer may request further 
                      information from you such as additional information or proof of information provided by you. Claims for the insurance 
                      policies purchased by you may be approved or rejected by the insurer at its own discretion. Insurvest does not control 
                      whether your application to purchase an insurance policy is approved or rejected, and whether your claim under any insurance 
                      policy is accepted or rejected. Insurvest shall not be responsible or liable for any damage or loss of any kind that you 
                      may face as a result of the above.
                    </p>
                  </div>

                  <hr className="my-5" />

                  {/* Market Risks */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-warning bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-exclamation-triangle text-warning fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">Market Risks</h2>
                    </div>
                    <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px', paddingLeft: '60px' }}>
                      Some Insurance products are subject to market risks. You are responsible for reading and understanding the limitations and 
                      risks involved in insurance policies.
                    </p>
                  </div>

                  <hr className="my-5" />

                  {/* Limitation of Liability */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-danger bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-shield-exclamation text-danger fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">Limitation of Liability</h2>
                    </div>
                    <div className="bg-light rounded-4 p-4 border-start border-4 border-danger mb-3" style={{ paddingLeft: '60px' }}>
                      <p className="fw-bold text-dark mb-2" style={{ fontSize: '16px' }}>
                        YOUR USE OF THE WEBSITE AND ALL INFORMATION PROVIDED IN IT ARE AT YOUR OWN RISK.
                      </p>
                      <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px' }}>
                        Insurvest, and its directors, officers, employees, agents, contractors, and advisors, are not responsible in any manner 
                        for any loss, harm or damage of any kind that occurs or may occur or arise from the use of information provided on this 
                        website. You are advised to use your own discretion.
                      </p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Intellectual Property */}
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-secondary bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-copyright text-secondary fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">Intellectual Property Rights</h2>
                    </div>
                    <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px', paddingLeft: '60px' }}>
                      In case you believe any intellectual property rights belonging to you or any third party are violated by this website, 
                      please contact us immediately.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="card border-0 shadow-sm mt-4" style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <div className="card-body p-4 text-center">
                  <h5 className="fw-bold mb-3">Need to Contact Us?</h5>
                  <p className="text-muted mb-3">
                    If you have any questions about this disclaimer or need to report any issues, please don't hesitate to reach out to us.
                  </p>
                  <a href="/contact/contact-v2" className="btn btn-primary px-4 py-2 rounded-pill fw-semibold">
                    <i className="bi bi-envelope me-2"></i>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .disclaimer-page {
          min-height: 100vh;
        }
        
        .card {
          transition: all 0.3s ease;
        }
        
        .card:hover {
          box-shadow: 0 10px 40px rgba(0,0,0,0.1) !important;
        }
        
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2rem !important;
          }
          
          .card-body {
            padding: 1.5rem !important;
          }
          
          .d-flex.align-items-center {
            flex-direction: column;
            align-items: flex-start !important;
          }
          
          .d-flex.align-items-center p {
            padding-left: 0 !important;
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DisclaimerPage;
