import Link from "next/link";
import Header from "@/components/home-page/home-10/Header";
import Hero from "@/components/home-page/home-10/Hero";
import ServicesSnapshot from "@/components/home-page/home-10/ServicesSnapshot"
import WhyChooseUs from "@/components/home-page/home-10/WhyChooseUs";
import HowItWorks from "@/components/home-page/home-10/HowItWorks";
import BrandStory from "@/components/home-page/home-10/BrandStory";
import ComplianceStrip from "@/components/home-page/home-10/ComplianceStrip";
import FinalCTAStrip from "@/components/home-page/home-10/FinalCTAStrip"
import OurPartners from "@/components/home-page/home-10/OurPartners";
import ContactForm from "@/components/home-page/home-10/ContactForm"

import Footer from "@/components/home-page/home-10/Footer";
import TestimonialLarge from "@/components/home-page/home-10/TestimonialLarge";

export const metadata = {
  title: "Agency Modern || GetClaims - Creative Multipurpose React NextJS Template",
};
const AgencyModern = () => {
  return (
    <>
      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />
      {/* <!-- /.theme-main-menu --> */}
      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <div className="hero-banner-one p-30">
        <div className="bg-wrapper" data-aos="fade">
          <Hero />
          
          {/* /.container */}
          {/* <img
            src="/images/shape/shape_08.svg"
            alt="illustration"
            className="lazy-img shapes shape-eight"
          /> */}
        </div>
      </div>
      {/* /.hero-banner-one */}

      {/* 
        =============================================
        Feature Section One
        ============================================== 
        */}
        <WhyChooseUs />
        <ServicesSnapshot />
        {/* <HowItWorks /> */}
        <BrandStory />
       
      
      <div style={{display:'none'}} className="fancy-feature-two position-relative pt-50 mt-40 lg-pt-50 sm-pt-60">
        <div className="container">
          {/* <OurAim /> */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-two */}

       {/* 
			=============================================
				Our Partners Section
			============================================== 
			*/}
      <OurPartners />

      {/*
			=====================================================
				Feedback Section One
			=====================================================
			*/}
     

      <div
        id="testimonials"
        className="feedback-section-one position-relative p-30 mt-80 lg-mt-80 "
        data-aos=""
       
      >
        <div className="bg-wrapper position-relative pt-50 pb-80 lg-pt-50 lg-pb-80" style={{background:'#d9fbff'}} >
          <img
            src="/images/shape/shape_14.svg"
            alt="img"
            className="lazy-img shapes shape-one"
          />
          <div className="shapes shape-two" />
          <div className="shapes shape-three" />
          <TestimonialLarge />
        </div>
        {/* /.bg-wrapper */}
      </div>
       <ComplianceStrip/>
      {/* /.feedback-section-one */}

       


      {/* 
			=============================================
				Feature Section Two
			============================================== 
			*/}
     
      <FinalCTAStrip />
      {/* <CallToActions /> */}
      {/* /.fancy-short-banner-one */}

      <ContactForm />

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
       <Footer />
     
      {/* /.footer-style-one */}
    </>
  );
};

export default AgencyModern;
