const ComplianceStrip = () => {
  const complianceItems = [
    {
      id: 1,
      icon: "bi-shield-check",
      title: "IRDAI Reg. No.",
      detail: "IMF/XX/XXXXX",
      iconColor: "text-primary"
    },
    {
      id: 2,
      icon: "bi-patch-check",
      title: "AMFI/SEBI/PFRDA",
      detail: "Partnered Products",
      iconColor: "text-success"
    },
    {
      id: 3,
      icon: "bi-bank",
      title: "RBI-NBFC/Banks",
      detail: "Compliance",
      iconColor: "text-info"
    },
    {
      id: 4,
      icon: "bi-flag",
      title: "Govt. of India Schemes",
      detail: "NSC, PPF, etc.",
      iconColor: "text-warning"
    },
    {
      id: 5,
      icon: "bi-award",
      title: "ISO-Certified",
      detail: "Advisory",
      iconColor: "text-danger"
    }
  ];

  return (
    <section className="compliance-strip-section mt-50">
      <div className="container">
        <div className="compliance-strip-wrapper">
          
          {/* Header */}
          <div className="compliance-header text-center mb-4">
            <h6 className="compliance-title fw-600 text-muted mb-2 text-uppercase ls-1">
              Regulatory Compliance & Certifications
            </h6>
            <div className="header-divider mx-auto"></div>
          </div>

          {/* Compliance Items */}
          <div className="row gx-3 gy-3 align-items-center justify-content-center">
            {complianceItems.map((item, index) => (
              <div key={item.id} className="col-lg col-md-4 col-sm-6">
                <div className="compliance-item text-center">
                  <div className="compliance-icon-wrapper mb-2">
                    <div className={`compliance-icon d-inline-flex align-items-center justify-content-center ${item.iconColor}`}>
                      <i className={`${item.icon} fs-16`}></i>
                    </div>
                  </div>
                  <div className="compliance-content">
                    <h6 className="compliance-item-title fw-600 mb-1 tx-dark">
                      {item.title}
                    </h6>
                    <p className="compliance-detail fs-12 text-muted mb-0">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="compliance-footer text-center mt-4">
            <p className="compliance-note fs-11 text-muted mb-0">
              All investments are subject to market risks. Please read all scheme-related documents carefully. 
              Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceStrip;