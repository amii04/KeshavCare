import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          KeshavCare is a pioneering healthcare management system dedicated to providing 
          top-notch medical care and streamlining healthcare processes.
          We bridge the gap between patients and healthcare providers through innovative technology and
          a patient-centric approach. 
          Our platform is designed to offer comprehensive healthcare solutions, ensuring that quality care is accessible to everyone.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
