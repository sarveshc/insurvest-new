import HeroSubscribe from "./HeroSubscribe";
import Illustration from "./Illustration";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-6">
          <h1 className="hero-heading fw-bold tx-dark">
            Secure Today. Grow Tomorrow.{" "}
            <span className="position-relative d-inline-block">
              Retire Confidently.
            </span>
          </h1>
          <p className="text-lg mb-40 pt-20 pe-xl-5 lg-pt-30 lg-mb-30 text-muted">
            Expert-led insurance and investment planning tailored to your goals.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons-wrapper d-flex flex-wrap gap-3 mb-50">
            <button className="btn btn-primary btn-lg px-4 py-3 fw-500 text-uppercase ls-1">
              Get Free Financial Plan
            </button>
            <button className="btn btn-outline-primary btn-lg px-4 py-3 fw-500 text-uppercase ls-1">
              Explore Our Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators d-flex flex-wrap align-items-center gap-4 pt-20">
            <div className="trust-item d-flex align-items-center">
              <div className="trust-icon me-2">
                <i className="bi bi-shield-check fs-18 text-success"></i>
              </div>
              <span className="fs-14 fw-500 tx-dark">IRDAI-Registered IMF</span>
            </div>
            <div className="trust-item d-flex align-items-center">
              <div className="trust-icon me-2">
                <i className="bi bi-people fs-18 text-primary"></i>
              </div>
              <span className="fs-14 fw-500 tx-dark">1000+ Clients Served</span>
            </div>
            <div className="trust-item d-flex align-items-center">
              <div className="trust-icon me-2">
                <i className="bi bi-award fs-18 text-warning"></i>
              </div>
              <span className="fs-14 fw-500 tx-dark">Tied with Top Insurers</span>
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}

      {/* Optional: Feature Card */}
      <div className="card-one shapes bg-white">
        <div className="icon rounded-circle position-absolute fs-18 text-white">
          <i className="bi bi-shield-plus" />
        </div>
        <h6 className="fw-500 tx-dark mb-15">
          Comprehensive financial protection & growth solutions.
        </h6>
        <a href="#" className="more-btn tran3s text-uppercase fw-500 fs-13">
          Learn More
        </a>
      </div>
      {/* End card-one */}

      <Illustration />
      {/* /.illustration-holder */}
    </div>
  );
};

export default Hero;