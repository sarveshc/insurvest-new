"use client";

import React, { useState, useEffect } from "react";

const TestimonialCircularStatic = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Parikshit Bhalerao, Mumbai.",
      image: "/images/icon/parikshit.e8d3a034.jpeg",
      text: "The team at epolicymart has helped me understand the nuances of various products and help me make an informed decision in selecting different insurance products. They have been a great support by providing prompt service in times of my need. I highly recommend epolicymart as the choice of provider of all your insurance needs. Thank you for your guidance & support."
    },
    {
      id: 2,
      name: "Saurabh Nigam",
      image: "/images/icon/surab.c1fc64f7.jpeg",
      text: "It was a fantastic experience for me throughout. The team is having quite a lot of learned professionals. They suggest the best optimum plans as per individual needs with the lowest premiums and round-the-clock service."
    },
   
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  const handleNextTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrevTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleTestimonialClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Styles
  const styles = {
    section: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: '#f8f9fa'
    },
    leftSection: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionTitle: {
      position: 'absolute',
      top: '60px',
      left: '60px',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1a1a1a',
      margin: 0,
      zIndex: 10
    },
    orbitContainer: {
      position: 'relative',
      width: '500px',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    centerLogo: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      background: '#ffff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 5,
      boxShadow: '0 10px 30px rgba(76, 175, 80, 0.2)'
    },
    logoWrapper: {
      width: '180px',
      height: '180px',
      // background: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    logoImage: {
      width: '100%',
      height: 'auto',
      objectFit: 'contain'
    },
    orbitRing: {
      position: 'absolute',
      borderRadius: '50%',
      border: '2px solid rgba(76, 175, 80, 0.1)',
      pointerEvents: 'none'
    },
    orbitItem: {
      position: 'absolute',
      cursor: 'pointer',
      width: '60px',
      height: '60px',
      transition: 'transform 0.3s ease, filter 0.3s ease'
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '3px solid #fff',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      background: '#f0f0f0'
    },
    decorativeDot: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      pointerEvents: 'none'
    },
    rightSection: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
      position: 'relative',
      padding: '60px'
    },
    testimonialContent: {
      maxWidth: '600px',
      width: '100%',
      textAlign: 'center',
      position: 'relative'
    },
    navArrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '50px',
      height: '50px',
      background: '#4CAF50',
      border: 'none',
      borderRadius: '50%',
      color: '#fff',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      zIndex: 10,
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
    },
    quoteIcon: {
      width: '80px',
      height: '80px',
      color: '#4CAF50',
      marginBottom: '30px',
      opacity: 0.15
    },
    testimonialText: {
      background: '#fff',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      marginBottom: '30px',
      position: 'relative',
      minHeight: '250px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 0.3s ease',
      opacity: isTransitioning ? 0 : 1
    },
    authorInfo: {
      marginBottom: '20px',
      transition: 'opacity 0.3s ease',
      opacity: isTransitioning ? 0 : 1
    },
    authorImage: {
      display: 'inline-block',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '4px solid #fff',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      marginBottom: '20px',
      transition: 'opacity 0.3s ease',
      opacity: isTransitioning ? 0 : 1
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px'
    },
    paginationDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      padding: 0
    }
  };

  // Position calculations for static circular placement
  const getOrbitPosition = (index) => {
    const angle = (index * 60) - 90; // Distribute 6 items evenly in a circle
    const radius = 200;
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    
    return {
      left: `calc(50% + ${x}px - 30px)`,
      top: `calc(50% + ${y}px - 30px)`
    };
  };

  // Media query styles
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const isTablet = typeof window !== 'undefined' && window.innerWidth <= 991;

  if (isMobile) {
    styles.sectionTitle.fontSize = '1.5rem';
    styles.orbitContainer.width = '300px';
    styles.orbitContainer.height = '300px';
    styles.centerLogo.width = '120px';
    styles.centerLogo.height = '120px';
    styles.logoWrapper.width = '100px';
    styles.logoWrapper.height = '100px';
    styles.navArrow.width = '40px';
    styles.navArrow.height = '40px';
  } else if (isTablet) {
    styles.sectionTitle.fontSize = '2rem';
    styles.orbitContainer.width = '400px';
    styles.orbitContainer.height = '400px';
    styles.centerLogo.width = '160px';
    styles.centerLogo.height = '160px';
    styles.logoWrapper.width = '140px';
    styles.logoWrapper.height = '140px';
  }

  return (
    <>
          {/* Left Side - Circular Design */}
         
            <div style={styles.leftSection}>
              
              
              <div style={styles.orbitContainer}>
                {/* Center Logo */}
                <div style={styles.centerLogo}>
                  <div style={styles.logoWrapper}>
                    <img 
                      src="/images/logo/Logo Insurvest.png" 
                      alt="INSURVEST"
                      style={styles.logoImage}
                      onError={(e) => {
                        // Fallback to text if image fails
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<span style="font-size: 1.2rem; font-weight: 700; color: #2E7D32; text-align: center;">INSURVEST</span>';
                      }}
                    />
                  </div>
                </div>

                {/* Orbital Rings */}
                <div style={{...styles.orbitRing, width: '280px', height: '280px', background: 'rgba(76, 175, 80, 0.05)'}}></div>
                <div style={{...styles.orbitRing, width: '380px', height: '380px', background: 'rgba(76, 175, 80, 0.03)'}}></div>
                <div style={{...styles.orbitRing, width: '480px', height: '480px', background: 'rgba(76, 175, 80, 0.02)'}}></div>

                {/* Static Profile Images in Circular Arrangement */}
                {testimonials.map((testimonial, index) => {
                  const position = getOrbitPosition(index);
                  return (
                    <div
                      key={testimonial.id}
                      style={{
                        ...styles.orbitItem,
                        ...position,
                        filter: index === activeTestimonial ? 'drop-shadow(0 0 20px rgba(76, 175, 80, 0.8))' : 'none',
                        transform: index === activeTestimonial ? 'scale(1.1)' : 'scale(1)'
                      }}
                      onClick={() => handleTestimonialClick(index)}
                      onMouseEnter={(e) => {
                        if (index !== activeTestimonial) {
                          e.currentTarget.style.transform = 'scale(1.15)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (index !== activeTestimonial) {
                          e.currentTarget.style.transform = 'scale(1)';
                        }
                      }}
                    >
                      <div style={styles.profileImage}>
                        <img 
                          src={testimonial.image || '/images/default-avatar.png'} 
                          alt={testimonial.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => {
                            e.target.src = '/images/default-avatar.png';
                          }}
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Decorative Dots */}
                <div style={{...styles.decorativeDot, background: '#2196F3', top: '15%', left: '75%'}}></div>
                <div style={{...styles.decorativeDot, background: '#4CAF50', bottom: '25%', left: '10%'}}></div>
                <div style={{...styles.decorativeDot, background: '#FF9800', top: '65%', right: '15%'}}></div>
                <div style={{...styles.decorativeDot, background: '#9C27B0', bottom: '15%', right: '20%'}}></div>
              </div>
            </div>
         

          </>
       
  );
};

export default TestimonialCircularStatic;
