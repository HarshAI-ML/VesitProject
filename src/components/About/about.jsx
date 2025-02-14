import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="content">
      <div className="sections">
      <div className="section">
        <h1>About Us</h1>
        <p>
          Welcome to our platform! We are dedicated to connecting farmers with equipment renters, making agriculture more accessible and efficient.
        </p>
        </div>
        
          <div className="section">
            <h2>Our Mission</h2>
            <p>
              Our goal is to empower farmers by providing easy access to high-quality equipment, ensuring productivity and sustainability in agriculture.
            </p>
          </div>
          <div className="section">
            <h2>Why Choose Us?</h2>
            <p>
              We offer a seamless rental experience, verified equipment listings, secure payments, and a dedicated support team for a hassle-free process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
