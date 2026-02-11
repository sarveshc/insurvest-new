import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section py-100 lg-py-80" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Left Side - Illustration */}
          <div className="col-lg-5">
            <div className="contact-illustration-wrapper">
              <div className="illustration-container position-relative">
                {/* Background Circle */}
                <div 
                  className="bg-circle position-absolute" 
                  style={{
                    width: '400px',
                    height: '400px',
                    background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                    borderRadius: '50%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: '0.3'
                  }}
                />
                
                {/* Contact Illustration Image */}
                <div className="illustration-content text-center position-relative">
                  <img 
                    src="/images/contact-illustration.svg" 
                    alt="Contact Us"
                    className="img-fluid"
                    style={{ maxWidth: '350px' }}
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div style="
                          width: 300px;
                          height: 300px;
                          background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
                          border-radius: 50%;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          margin: 0 auto;
                        ">
                          <i class="bi bi-headset" style="font-size: 100px; color: white;"></i>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Floating Elements */}
                <div 
                  className="floating-dot"
                  style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#4CAF50',
                    borderRadius: '50%',
                    animation: 'float 3s ease-in-out infinite'
                  }}
                />
                <div 
                  className="floating-dot"
                  style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '15%',
                    width: '15px',
                    height: '15px',
                    backgroundColor: '#FF9800',
                    borderRadius: '50%',
                    animation: 'float 3s ease-in-out infinite 1s'
                  }}
                />
              </div>

              {/* Info Text */}
              <div className="contact-info-text text-center mt-5">
                <h4 className="fw-600 tx-dark mb-3">Get Expert Guidance</h4>
                <p className="text-muted fs-16 mb-4">
                  Have questions about insurance or investments? 
                  Our experts are here to help you make informed decisions.
                </p>
                
                {/* Quick Contact */}
                <div className="quick-contact d-flex justify-content-center gap-4 flex-wrap">
                  <a href="tel:+919999999999" className="quick-contact-item text-decoration-none">
                    <i className="bi bi-telephone-fill text-primary me-2"></i>
                    <span className="text-dark fw-500">+91 9999999999</span>
                  </a>
                  <a href="mailto:contact@insurvest.in" className="quick-contact-item text-decoration-none">
                    <i className="bi bi-envelope-fill text-primary me-2"></i>
                    <span className="text-dark fw-500">contact@insurvest.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card">
              <div className="form-header mb-4">
                <h2 className="form-title fw-bold tx-dark mb-3">Contact Us</h2>
                <p className="form-subtitle text-muted">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form className="contact-form">
                <div className="row">
                  {/* Name Field */}
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label className="form-label fw-500 mb-2 text-dark">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control contact-input"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label className="form-label fw-500 mb-2 text-dark">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control contact-input"
                        placeholder="example@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Mobile Field */}
                  <div className="col-12 mb-4">
                    <div className="form-group">
                      <label className="form-label fw-500 mb-2 text-dark">
                        Mobile <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text contact-prefix">+91</span>
                        <input
                          type="tel"
                          className="form-control contact-input"
                          placeholder="Mobile number"
                          pattern="[0-9]{10}"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Field (Optional) */}
                  <div className="col-12 mb-4">
                    <div className="form-group">
                      <label className="form-label fw-500 mb-2 text-dark">
                        Subject
                      </label>
                      <select className="form-control contact-input">
                        <option value="">Select a topic</option>
                        <option value="life-insurance">Life Insurance</option>
                        <option value="health-insurance">Health Insurance</option>
                        <option value="motor-insurance">Motor Insurance</option>
                        <option value="investment">Investment Planning</option>
                        <option value="retirement">Retirement Planning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="col-12 mb-4">
                    <div className="form-group">
                      <label className="form-label fw-500 mb-2 text-dark">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control contact-input"
                        placeholder="Type here"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg contact-submit w-100"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>

              {/* Trust Badges */}
              <div className="trust-badges mt-4 pt-4 border-top">
                <div className="row g-3 text-center">
                  <div className="col-4">
                    <div className="trust-badge">
                      <i className="bi bi-shield-check fs-24 text-success mb-2 d-block"></i>
                      <span className="fs-12 text-muted">100% Secure</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="trust-badge">
                      <i className="bi bi-clock-history fs-24 text-info mb-2 d-block"></i>
                      <span className="fs-12 text-muted">Quick Response</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="trust-badge">
                      <i className="bi bi-headset fs-24 text-primary mb-2 d-block"></i>
                      <span className="fs-12 text-muted">Expert Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .contact-form-card {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .contact-input {
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          padding: 12px 20px;
          font-size: 16px;
          transition: all 0.3s ease;
          background-color: #fafafa;
        }

        .contact-input:focus {
          border-color: #4CAF50;
          background-color: #fff;
          box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
          outline: none;
        }

        .contact-prefix {
          background-color: #f8f9fa;
          border: 1px solid #e0e0e0;
          border-right: none;
          border-radius: 10px 0 0 10px;
          color: #666;
          font-weight: 500;
        }

        .contact-submit {
          background: #4CAF50;
          border: none;
          border-radius: 10px;
          padding: 14px 30px;
          font-weight: 600;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .contact-submit:hover {
          background: #388E3C;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(76, 175, 80, 0.3);
        }

        .quick-contact-item:hover {
          opacity: 0.8;
        }

        @media (max-width: 991px) {
          .contact-form-card {
            padding: 30px 25px;
          }

          .contact-illustration-wrapper {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 576px) {
          .contact-form-card {
            padding: 25px 20px;
          }

          .quick-contact {
            flex-direction: column;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;