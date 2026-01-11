"use client";

import Slider from "react-slick";
import React, { useRef } from "react";
import TestimonialCircularStatic from "./TestimonialCircularStatic";
import Image from "next/image";

const TestimonialLarge = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    const sliderRef = useRef(null);
 
  return (
    <>
      <div className="container">
      <div className="row align-items-center mb-20">
          <div className="col-lg-12 col-md-12">
            <div className="title-style-one text-center text-md-start">
              <h3 className="main-title text-center testiTitle fw-bold tx-dark">
                Hear From People Like You
              </h3>
            </div>
            {/* /.title-style-one */}
          </div>
          
        </div>
       
 <div className="container-fluid">
        <div className="row align-items-center g-0">
          <div className="col-lg-6">
          <TestimonialCircularStatic />
          </div>
      <div className="col-lg-6">
      <div
      id="carouselExampleControls"
      className="carousel slide text-center carousel-dark"
      data-mdb-ride="carousel"
    >
      <div className="carousel-inner">
      <Slider {...settings} ref={sliderRef} arrows={false}>
        <div className="carousel-item text-center">
          <img
            className="rounded-circle shadow-1-strong mb-4"
             src="/images/icon/surab.c1fc64f7.jpeg"
            alt="avatar"
            style={{ width: '150px', margin:'auto', height: '145px' }}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <h5 className="mb-3">Saurabh Nigam</h5>
              {/* <p>Photographer</p> */}
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                 It was a fantastic experience for me throughout. The team is having quite a lot of learned professionals. They suggest the best optimum plans as per individual needs with the lowest premiums and round-the-clock service. 
                </p>
             
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
          </ul>
        </div>
        <div className="carousel-item">
          <img
            className="rounded-circle shadow-1-strong mb-4"
             src="/images/icon/parikshit.e8d3a034.jpeg"
            alt="avatar"
            style={{ width: '150px', margin:'auto', height: '145px'  }}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <h5 className="mb-3">Dr.Parikshit Bhalerao, Mumbai.</h5>
              {/* <p>Photographer</p> */}
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                 The team at epolicymart has helped me understand the nuances of various products and help me make an informed decision in selecting different insurance products.
They have been a great support by providing prompt service in times of my need.I highly recommend epolicymart as the choice of provider of all your insurance needs.Thank you for your guidance & support. 
                </p>
             
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
          </ul>
        </div>
        
       
        </Slider>
      </div>

    </div>

    <div className="row align-items-center mt-20">
          
          <div className="col-lg-12 col-md-12 ms-auto d-flex justify-content-center">
            <ul className="slider-arrows text-center slick-arrow-one d-flex justify-content-center style-none mb-30">
              <li
                className="prev_f1 slick-arrow rounded-circle text-center fs-20 tran3s"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <i className="bi bi-chevron-left" />
              </li>
              <li
                className="next_f1 slick-arrow rounded-circle text-center fs-20 tran3s"
                onClick={() => sliderRef.current.slickNext()}
              >
                <i className="bi bi-chevron-right" />
              </li>
            </ul>
          </div>
        </div>
      </div>
</div>
</div>
      </div>
      {/* /.container */}

      
      {/* /.inner-content */}
    </>
  );
};

export default TestimonialLarge;
