const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "bi-patch-check-fill",
      image: "/images/features/irdai-approved.svg",
      title: "IRDAI Approved",
      description: "Registered with India's insurance regulator for your trust and security",
      iconColor: "text-primary",
      bgColor: "bg-primary-soft"
    },
    {
      id: 2,
      icon: "bi-person-badge",
      image: "/images/features/anonymous-quotes.svg",
      title: "Anonymous Quotes",
      description: "Get unbiased quotes without sharing personal details upfront",
      iconColor: "text-success",
      bgColor: "bg-success-soft"
    },
    {
      id: 3,
      icon: "bi-calculator",
      image: "/images/features/right-amount.svg",
      title: "Right Amount and Term",
      description: "Expert guidance to determine optimal coverage and duration",
      iconColor: "text-info",
      bgColor: "bg-info-soft"
    },
    {
      id: 4,
      icon: "bi-trophy",
      image: "/images/features/cheap-not-best.svg",
      title: "Cheap isn't always best",
      description: "We focus on value and comprehensive coverage, not just low prices",
      iconColor: "text-warning",
      bgColor: "bg-warning-soft"
    },
    {
      id: 5,
      icon: "bi-person-heart",
      image: "/images/features/relationship-manager.svg",
      title: "Dedicated Relationship Manager",
      description: "Personal advisor assigned to guide you through your financial journey",
      iconColor: "text-danger",
      bgColor: "bg-danger-soft"
    },
    {
      id: 6,
      icon: "bi-headset",
      image: "/images/features/claim-assistance.svg",
      title: "Service and Claim Assistance",
      description: "End-to-end support for all services and hassle-free claim settlements",
      iconColor: "text-purple",
      bgColor: "bg-purple-soft"
    },
    {
      id: 7,
      icon: "bi-x-circle",
      image: "/images/features/freelook-cancellation.svg",
      title: "Freelook Cancellation",
      description: "15-30 day free-look period to review and cancel if not satisfied",
      iconColor: "text-teal",
      bgColor: "bg-teal-soft"
    }
  ];

  return (
    <section className="why-choose-section pt-80 pb-80 lg-pt-60 lg-pb-60" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-60 lg-mb-40">
              <h2 className="section-heading fw-bold tx-dark mb-20">
                Trust | Transparency | Technology
              </h2>
              <p className="section-subtitle fs-18 text-muted mb-0 mx-auto" style={{ maxWidth: '600px' }}>
                Backed by data, powered by care.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="row gx-4 gy-4">
          {features.map((feature) => (
            <div key={feature.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="feature-card-why h-100" style={featureCardStyle}>
                <div className="card-inner p-4" style={cardInnerStyle}>
                  {/* Icon/Image Container */}
                  <div className="feature-icon-container mb-3" style={iconContainerStyle}>
                    <div className="feature-illustration" style={illustrationStyle}>
                      {/* You can replace this with actual SVG images when available */}
                      <div className={`icon-circle d-flex align-items-center justify-content-center ${feature.bgColor}`} style={iconCircleStyle}>
                        <i className={`${feature.icon} ${feature.iconColor}`} style={{ fontSize: '2.5rem' }}></i>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h5 className="feature-title fw-600 tx-dark mb-2 text-center" style={titleStyle}>
                    {feature.title}
                  </h5>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or Trust Message */}
        <div className="row mt-60 lg-mt-40">
          <div className="col-12 text-center">
            <div className="trust-message">
              <p className="fs-18 fw-500 text-muted mb-0">
                Join <span className="text-primary fw-600">10,000+</span> satisfied customers who trust us with their financial future
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Inline styles for better control
const featureCardStyle = {
  backgroundColor: '#fff',
  borderRadius: '20px',
  border: '1px solid rgba(0,0,0,0.08)',
  boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  overflow: 'hidden'
};

const cardInnerStyle = {
  position: 'relative',
  zIndex: 1
};

const iconContainerStyle = {
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const illustrationStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const iconCircleStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  transition: 'all 0.3s ease'
};

const titleStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.4'
};

const descriptionStyle = {
  lineHeight: '1.6'
};

export default WhyChooseUs;