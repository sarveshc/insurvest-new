"use client";

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/[^0-9]/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setSubmitStatus('success');
      setStatusMessage(data.message || 'Thank you! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
        setStatusMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setStatusMessage(error.message || 'Failed to send message. Please try again.');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-form-section py-100 lg-py-80" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side - Illustration */}
          <div className="col-lg-5 col-md-6 mb-50 lg-mb-40">
            <div className="illustration-wrapper text-center">
              <div className="contact-illustration">
                {/* SVG Illustration */}
                <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
                  {/* Background Circle */}
                  <circle cx="200" cy="200" r="180" fill="#e8f5e9" opacity="0.3" />
                  <circle cx="200" cy="200" r="140" fill="#e8f5e9" opacity="0.5" />
                  
                  {/* Status Dots */}
                  <circle cx="140" cy="100" r="8" fill="#4CAF50" />
                  <circle cx="160" cy="100" r="8" fill="#4CAF50" />
                  <circle cx="180" cy="100" r="8" fill="#4CAF50" />
                  
                  {/* Computer Monitor */}
                  <rect x="100" y="140" width="120" height="80" rx="5" fill="#1976d2" />
                  <rect x="110" y="150" width="100" height="60" rx="3" fill="#e3f2fd" />
                  <rect x="140" y="220" width="40" height="10" fill="#666" />
                  <rect x="120" y="230" width="80" height="5" fill="#999" />
                  
                  {/* Person Icon */}
                  <circle cx="160" cy="170" r="20" fill="#f5f5f5" stroke="#ddd" strokeWidth="2" />
                  <circle cx="160" cy="160" r="15" fill="#8d6e63" />
                  <path d="M145 175 Q160 165 175 175 L175 185 Q160 195 145 185 Z" fill="#7e57c2" />
                  
                  {/* Headset */}
                  <path d="M140 155 Q140 145 150 145 Q160 145 160 155" stroke="#ffc107" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <circle cx="140" cy="160" r="5" fill="#ffc107" />
                  <circle cx="180" cy="160" r="5" fill="#ffc107" />
                  
                  {/* Phone */}
                  <g transform="translate(240, 200)">
                    <path d="M0 0 C0 0 -10 -20 -30 -20 L-50 -20 C-60 -20 -60 -10 -60 -10 L-60 30 C-60 30 -60 40 -50 40 L-30 40 C-10 40 0 20 0 20 Z" fill="#4CAF50" />
                    <circle cx="-30" cy="10" r="15" fill="#fff" />
                    <path d="M-35 5 L-25 5 M-35 10 L-25 10 M-35 15 L-25 15" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  
                  {/* Books/Files */}
                  <rect x="120" y="250" width="80" height="10" fill="#ff9800" />
                  <rect x="120" y="265" width="80" height="10" fill="#ff9800" opacity="0.8" />
                  <rect x="120" y="280" width="80" height="10" fill="#ff9800" opacity="0.6" />
                </svg>
              </div>
              
              <div className="illustration-text mt-4">
                <h4 className="fw-600 tx-dark mb-3">We're Here to Help!</h4>
                <p className="text-muted fs-16">
                  Get expert advice on insurance and investment planning. 
                  Our team typically responds within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-7 col-md-6">
            <div className="contact-form-wrapper">
              <div className="form-container">
                <h2 className="form-title fw-bold tx-dark mb-4">Contact Us</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="form-group mb-4">
                    <label htmlFor="name" className="form-label fw-500 mb-2">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-group mb-4">
                    <label htmlFor="email" className="form-label fw-500 mb-2">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="example@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  {/* Mobile Field */}
                  <div className="form-group mb-4">
                    <label htmlFor="mobile" className="form-label fw-500 mb-2">
                      Mobile <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">+91</span>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                        maxLength="10"
                      />
                      {errors.mobile && (
                        <div className="invalid-feedback d-block">{errors.mobile}</div>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="form-group mb-4">
                    <label htmlFor="message" className="form-label fw-500 mb-2">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Type your message here..."
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 fw-600 text-uppercase"
                    disabled={isSubmitting}
                    
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="alert alert-success mt-3 d-flex align-items-center" role="alert">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      {statusMessage || 'Thank you! We\'ll get back to you soon.'}
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="alert alert-danger mt-3 d-flex align-items-center" role="alert">
                      <i className="bi bi-exclamation-triangle-fill me-2"></i>
                      {statusMessage || 'Failed to send message. Please try again.'}
                    </div>
                  )}
                </form>

                {/* Alternative Contact Options */}
                <div className="alternative-contact mt-5 pt-4 border-top">
                  <p className="text-muted mb-3 fw-500">Or reach us directly at:</p>
                  <div className="contact-options d-flex flex-wrap gap-4">
                    <a href="tel:+919871487110" className="contact-option d-flex align-items-center text-decoration-none">
                      <i className="bi bi-telephone-fill me-2 text-primary"></i>
                      <span className="text-dark">+91 9871487110</span>
                    </a>
                    <a href="mailto:contact@insurvest.in" className="contact-option d-flex align-items-center text-decoration-none">
                      <i className="bi bi-envelope-fill me-2 text-primary"></i>
                      <span className="text-dark">contact@insurvest.in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-form-section {
          position: relative;
          overflow: hidden;
        }

        .form-container {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .form-control {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 12px 15px;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          border-color: #4CAF50;
          box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
        }

        .form-label {
          color: #333;
          font-size: 15px;
        }

        .input-group-text {
          background-color: #f8f9fa;
          border-color: #e0e0e0;
          color: #666;
        }

        .contact-option:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .form-container {
            padding: 25px;
          }
          
          .contact-options {
            flex-direction: column;
            gap: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;