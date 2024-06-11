import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At KeshavCare, we believe that healthcare should be accessible, efficient, and personalized. Since our inception in 2023, we have been committed to transforming the healthcare landscape through state-of-the-art technology and patient-focused services. Our team consists of experienced healthcare professionals, tech enthusiasts, and compassionate individuals who work tirelessly to ensure that our users receive the best care possible. 
          </p>
          <p>Our system offers a wide range of features including appointment scheduling, medical records management, telemedicine services, and real-time health monitoring. We prioritize patient privacy and data security, ensuring that all medical information is handled with the utmost care.</p>
          <p>
          KeshavCare is not just a healthcare management system; it is a partner in your health journey. We are dedicated to continuous improvement and innovation, always striving to enhance our services and exceed our users' expectations. Join us in our mission to make healthcare better, one patient at a time.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
