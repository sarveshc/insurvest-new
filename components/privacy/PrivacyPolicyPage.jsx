"use client"
import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
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
                Privacy Policy
              </h1>
              <p className="lead mb-0 mx-auto" style={{ 
                maxWidth: '700px',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                opacity: '0.95'
              }}>
                How we collect, use, and protect your personal information
              </p>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0" style={{ height: '80px', background: 'linear-gradient(to bottom, transparent, white)' }}></div>
      </section>

      {/* Privacy Policy Content */}
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
                      <h2 className="h4 fw-bold mb-0">1. Introduction</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <p className="text-muted lh-lg mb-3" style={{ fontSize: '15px' }}>
                        Insurvest Insurance Marketing Private Limited ("Company", "we", "our", or "us") provides the website at 
                        <a href="https://www.insurvest.in" className="text-primary text-decoration-none fw-semibold"> https://www.insurvest.in</a> ("Website"). 
                        The Website, and any other website or software provided by the Company that explicitly mentions the applicability of this Privacy Policy 
                        ("Privacy Policy"), are referred to below as "Platform". Services offered on the Platform are referred to below as "Platform Services".
                      </p>
                      <p className="text-muted lh-lg mb-3" style={{ fontSize: '15px' }}>
                        The Platform is provided by the Company for the purpose of allowing individuals ("User(s)", "you" or "your") to help you in purchasing 
                        insurance policies ("Insurance Policy" or "Insurance Policies") from insurance providers ("Insurer(s)") by providing you're the ability 
                        to view and compare Insurance Policies from multiple Insurers. In the course of providing the Platform and Platform Services, we may 
                        collect and/or otherwise gain access to certain information that may be used to identify you ("Personal Data").
                      </p>
                      <p className="text-muted lh-lg mb-3" style={{ fontSize: '15px' }}>
                        This Privacy Policy describes the manner in which we may collect, receive, use, store, share, disclose, transfer, and otherwise process 
                        (collectively, "Process", "Processed", "Processing") your Personal Data, as well as your rights and choices in determining what we 
                        do with the information that we collect or hold about you. This Privacy Policy does not govern the Processing of non-personal, 
                        de-identified, or anonymized, information by the Company.
                      </p>
                      <p className="text-muted lh-lg mb-3" style={{ fontSize: '15px' }}>
                        The Company is committed to protecting your privacy in accordance with the provisions of applicable laws and regulations ("Data Privacy Rules") 
                        and this Privacy Policy.
                      </p>
                      <div className="bg-light rounded-4 p-4 border-start border-4 border-primary">
                        <p className="fw-semibold text-dark mb-2" style={{ fontSize: '15px' }}>
                          <i className="bi bi-exclamation-circle text-primary me-2"></i>
                          Important Notice
                        </p>
                        <p className="text-muted mb-0 lh-lg" style={{ fontSize: '14px' }}>
                          Before using the Platform or submitting any Personal Data to the Company, please review this Privacy Policy carefully and contact us 
                          if you have any questions. By using the Platform, you agree to the practices described in this Privacy Policy. If you do not agree to 
                          this Privacy Policy, please do not access the Website or otherwise use the Platform.
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="fw-semibold text-dark mb-2" style={{ fontSize: '15px' }}>Important Links:</p>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">
                            <Link href="/terms" className="text-primary text-decoration-none">
                              <i className="bi bi-file-text me-2"></i>Terms and Conditions
                            </Link>
                          </li>
                          <li className="mb-2">
                            <Link href="/privacy" className="text-primary text-decoration-none">
                              <i className="bi bi-shield-lock me-2"></i>Privacy Policy
                            </Link>
                          </li>
                          <li className="mb-0">
                            <Link href="/disclaimer" className="text-primary text-decoration-none">
                              <i className="bi bi-info-circle me-2"></i>Disclaimers
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Categories of Personal Data */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-database text-success fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">2. Categories of Personal Data that We Process</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <p className="text-muted lh-lg mb-4" style={{ fontSize: '15px' }}>
                        The Company collects and processes only Personal Data that it believes is reasonably required for providing its services, carrying out 
                        its functions, and improving the Platform. In particular, the Company may Process:
                      </p>

                      <div className="mb-4">
                        <h5 className="fw-bold mb-3">2.1. Information provided by you:</h5>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2 d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0"></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Your name and contact information such as email address and mobile number;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0"></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Personal details required for providing an Insurance Policy quote such as your age/date of birth, gender and smoker status may be Processed to get Insurance Policy quotes from Insurers;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0"></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Your preference, such as notification preferences;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0"></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Questions, comments, concerns, or feedback, provided by you;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0"></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Information necessary to authenticate your account such as your password; and</span>
                          </li>
                          <li className="mb-0 d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0"></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Any other personal information provided by you.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h5 className="fw-bold mb-3">2.2. Usage and Technical Data:</h5>
                        <p className="text-muted lh-lg mb-3" style={{ fontSize: '15px' }}>
                          We may choose to Process information about how you use our Platform, such as:
                        </p>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2 d-flex align-items-start">
                            <i className="bi bi-circle-fill text-primary me-2 mt-1" style={{ fontSize: '6px' }}></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Web pages visited;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <i className="bi bi-circle-fill text-primary me-2 mt-1" style={{ fontSize: '6px' }}></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Searches performed;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <i className="bi bi-circle-fill text-primary me-2 mt-1" style={{ fontSize: '6px' }}></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Insurance policies viewed;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <i className="bi bi-circle-fill text-primary me-2 mt-1" style={{ fontSize: '6px' }}></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Insurance policies purchased;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <i className="bi bi-circle-fill text-primary me-2 mt-1" style={{ fontSize: '6px' }}></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Features you use, actions you take, and the time, frequency, and duration of your use; and</span>
                          </li>
                          <li className="mb-0 d-flex align-items-start">
                            <i className="bi bi-circle-fill text-primary me-2 mt-1" style={{ fontSize: '6px' }}></i>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Information regarding your web browser, app version, operating system, device related information, network performance metrics, Internet protocol address (IP address), referring/exit pages, date/time stamp, clickstream data, broad geographical information, and navigation patterns.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h5 className="fw-bold mb-3">2.3. Social Media Data:</h5>
                        <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px' }}>
                          We may create and maintain pages on social media sites such as Facebook, Twitter, and LinkedIn, among others. When you interact with 
                          our social media pages, we may Process Personal Data that you choose provide to us, such as your contact details. In addition, the 
                          companies that host our social media pages may provide us with aggregate information and analytics regarding the use of our social media pages.
                        </p>
                      </div>

                      <div className="mb-0">
                        <h5 className="fw-bold mb-3">2.4. Derived Data:</h5>
                        <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px' }}>
                          We may infer your preferences for content and features of the Platform, or future products and services, based on the Personal Data we collect about you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* How We Process Personal Data */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-info bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-gear text-info fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">3. How We Process Personal Data</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <div className="mb-4">
                        <h5 className="fw-bold mb-3">3.1. Use by the Company:</h5>
                        <p className="text-muted lh-lg mb-3" style={{ fontSize: '15px' }}>
                          The Company will only use your Personal Data in a fair and reasonable manner, and where it has a lawful reason to do so. The Company's 
                          use of your Personal Data depends on the purpose for which you access the Platform and/or the nature of the Platform Services availed by you. 
                          The Company may process Personal Data for the following purposes:
                        </p>
                        
                        <div className="mb-3">
                          <h6 className="fw-semibold mb-2">For our contractual obligations to you:</h6>
                          <ul className="list-unstyled mb-0 ms-3">
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">a.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>For providing the Platform and Platform Services requested by you;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">b.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>To create your account, facilitate network connections, recommend content, and further personalize the Platform for you;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">c.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>To respond to your questions, comments and feedback;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">d.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>To contact you in relation to the Platform and Platform Services when necessary; and</span>
                            </li>
                            <li className="mb-0 d-flex align-items-start">
                              <span className="text-primary me-2">e.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>To authenticate your account and keep it secure.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="mb-0">
                          <h6 className="fw-semibold mb-2">For our legitimate purposes:</h6>
                          <ul className="list-unstyled mb-0 ms-3">
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">a.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>To analyze how you interact with the Platform;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">b.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>For improving the Platform and Platform Services;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">c.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>For direct marketing by sending you further communication, such as recommendations relating to our products and/or services;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">d.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>To offer other Insurance Policies, and other products or services to you;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">e.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>To develop new products and services;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">f.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>For the purpose of backup and recovery of data;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">g.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>To secure our products and services, and to enhance the security of our products and services;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">h.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>For compliance with a law, rules, regulations, government order or court order, or law enforcement request;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">i.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>To enforce ours legal agreements;</span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                              <span className="text-primary me-2">j.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>For protection of our legal rights; and</span>
                            </li>
                            <li className="mb-0 d-flex align-items-start">
                              <span className="text-primary me-2">k.</span>
                              <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>For prevention and detection of spam, fraud, abuse, criminal activity, or misuses of our Platform.</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mb-0">
                        <h5 className="fw-bold mb-3">3.2. Disclosure and Transfer:</h5>
                        <p className="text-muted lh-lg mb-3" style={{ fontSize: '15px' }}>
                          The Company discloses your Personal Data only to such employees, service providers and representatives who it reasonably believes need 
                          that information to fulfil their duties and to provide the products and/or services sought. The Company will not disclose, transfer or 
                          share your personal information with any third-parties, other than with:
                        </p>
                        <ul className="list-unstyled mb-0 ms-3">
                          <li className="mb-2 d-flex align-items-start">
                            <span className="text-primary me-2">a.</span>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Insurance Providers, such as for the purpose of providing Insurance Policy quotes, and issuance of Insurance Policies;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <span className="text-primary me-2">b.</span>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Third parties to perform functions and provide services to the Company, including but not limited to hosting and maintenance, database storage and management;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <span className="text-primary me-2">c.</span>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Our affiliates to the extent required for our internal business purposes, administrative purposes, for general operations, and/or for provision of services;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <span className="text-primary me-2">d.</span>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Government agencies such as the Insurance Regulatory and Development Authority ("IRDAI") for compliance with regulatory requirements;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <span className="text-primary me-2">e.</span>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Third parties as necessary to establish or respond to a legal claim;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <span className="text-primary me-2">f.</span>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Courts, tribunals, law enforcement and other authorities pursuant to orders issued by them or pursuant to mandate under law, for compliance with legal process, for verification of identity, or for prevention, detection, investigation, prosecution and punishment of incidents including cyber incidents, fraud or imminent harm, and ensuring the security of our network and services;</span>
                          </li>
                          <li className="mb-2 d-flex align-items-start">
                            <span className="text-primary me-2">g.</span>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Third parties in case of a business transfer if we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale of all or a portion of our assets, or transition of service to another provider; and</span>
                          </li>
                          <li className="mb-0 d-flex align-items-start">
                            <span className="text-primary me-2">h.</span>
                            <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>Your feedback and testimonials may be shared publicly. Please contact us if you want us to stop sharing any feedback or testimonial.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Data Storage and Retention */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-warning bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-archive text-warning fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">4. Data Storage and Retention</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px' }}>
                        We may retain your Personal Data at least as long as required for our business purposes, for resolution of legal disputes, or as required 
                        by an applicable law, rules, regulations, or a court order. If retention of your Personal Data is no longer permitted by applicable law, 
                        rules, regulations, or court order, the Company may either destroy such Personal Data, or de-identify, anonymize or aggregate such 
                        Personal Data so that it can no longer be associated with you or used to identify you.
                      </p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Cookies */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-secondary bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-cookie text-secondary fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">5. Cookies</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px' }}>
                        We may use cookies to perform the actions listed in this Privacy Policy, such as authentication of your account and retention of your search history.
                      </p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Unsolicited Information */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-danger bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-envelope text-danger fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">6. Unsolicited Information</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px' }}>
                        The Company may receive Personal Data about you that it has not actively sought to collect. For example, information may be provided by you 
                        in a direct communication to the Company. The Company may keep records of this information.
                      </p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Third-Party Websites */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-info bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-link-45deg text-info fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">7. Third-Party Website(s), App(s), Software(s), or Service(s)</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px' }}>
                        The Platform may contain links to the websites of Insurers, our partner networks, advertisers, affiliates, or any other third-party websites, 
                        apps, services or software. This Privacy Policy does not apply to data collected on third party websites, apps, or services, or the use of our 
                        Platform and services by third parties for collection of information, even if such third parties are our partners and display our branding on 
                        their websites, apps, or services. Data collected by third parties is subject to their own privacy policies and privacy practices. Please check 
                        the privacy policies and terms of service / terms and conditions of any third-party website, app, software, or service that you choose to visit 
                        or use. We do not accept any liability for any data processing activity such as collection, storage, use / misuse, sharing, disclosure or transfer 
                        of data, viruses or other malware, or any other damage, loss or harm caused to you or anyone else as a result of your visit to any third-party 
                        website, app, or service, or use of any third-party website, app, service or software.
                      </p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Children */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-person-badge text-primary fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">8. Children</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px' }}>
                        The Platform is not meant to be used by anyone under the age of 18 years. If you are under the age of 18, you may use the Platform only with 
                        the involvement and consent of your parent or legal guardian.
                      </p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Territory */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-globe text-success fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">9. Territory</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px' }}>
                        The Platform is meant to be used by people of India only. The Insurance Policies displayed on the Platform are for India only. All activities 
                        related to Processing of data are performed in compliance with requirements under Indian laws, rules, regulations, guidelines, and court orders, 
                        such as guidelines issued by the IRDAI.
                      </p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Changes to Privacy Policy */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-warning bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-arrow-repeat text-warning fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">10. Changes to the Privacy Policy</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <p className="text-muted lh-lg mb-0" style={{ fontSize: '15px' }}>
                        The Company may amend or modify the terms of this Privacy Policy from time to time. If we make any significant change to this Privacy Policy, 
                        we will attempt to notify you, such as by contacting you or by providing a notice in the interface of the Platform. However, you should regularly 
                        review the Privacy Policy from time to time to ensure that you are aware of the latest Privacy Policy. Any changes will be effective at least 
                        14 days after posting of the revised Privacy Policy. The date on which this Privacy Policy is updated as well as the date on which the updated 
                        Privacy Policy became effective can be viewed by visiting the Privacy Policy on our Website.
                      </p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Your Choices */}
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-info bg-opacity-10 rounded-3 p-2 me-3">
                        <i className="bi bi-sliders text-info fs-4"></i>
                      </div>
                      <h2 className="h4 fw-bold mb-0">11. Your Choices</h2>
                    </div>
                    <div style={{ paddingLeft: '60px' }}>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-3 d-flex align-items-start">
                          <span className="badge bg-primary rounded-circle me-3 mt-1" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>1</span>
                          <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>
                            In certain circumstances providing Personal Data may be optional. However, if you choose not to provide Personal Data that is needed to use 
                            some features of our Platform, you may be unable to use those features.
                          </span>
                        </li>
                        <li className="mb-3 d-flex align-items-start">
                          <span className="badge bg-primary rounded-circle me-3 mt-1" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>2</span>
                          <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>
                            You can update or correct your Personal Data in your account on the Platform. However, please note that updating Personal Data in your account 
                            does not result in any change to Personal Data in your Insurance Policies. Changes to your Insurance Policies must be made by directly contacting 
                            the relevant Insurer.
                          </span>
                        </li>
                        <li className="mb-3 d-flex align-items-start">
                          <span className="badge bg-primary rounded-circle me-3 mt-1" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>3</span>
                          <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>
                            All marketing related emails sent by us contain a link or another method to opt out of similar emails in future. Please note it may take up to 
                            21 days to process your request.
                          </span>
                        </li>
                        <li className="mb-0 d-flex align-items-start">
                          <span className="badge bg-primary rounded-circle me-3 mt-1" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>4</span>
                          <span className="text-muted lh-lg" style={{ fontSize: '15px' }}>
                            If you have any question, concern, grievance or complaint in relation to the processing of your Personal Data by the Company, please contact 
                            the Company's Grievance Officer, at <a href="mailto:contact@insurvest.in" className="text-primary text-decoration-none fw-semibold">contact@insurvest.in</a>.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              {/* Contact Information Card */}
              <div className="card border-0 shadow-sm mt-4" style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <div className="card-body p-4 text-center">
                  <h5 className="fw-bold mb-3">Questions About Privacy?</h5>
                  <p className="text-muted mb-3">
                    If you have any questions, concerns, or grievances regarding our Privacy Policy or how we handle your Personal Data, 
                    please contact our Grievance Officer.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <a href="mailto:contact@insurvest.in" className="btn btn-primary px-4 py-2 rounded-pill fw-semibold">
                      <i className="bi bi-envelope me-2"></i>
                      Email Us
                    </a>
                    <Link href="/contact/contact-v2" className="btn btn-outline-primary px-4 py-2 rounded-pill fw-semibold">
                      <i className="bi bi-chat-dots me-2"></i>
                      Contact Form
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .privacy-policy-page {
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
          
          .d-flex.align-items-center > div[style*="padding-left"] {
            padding-left: 0 !important;
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicyPage;
