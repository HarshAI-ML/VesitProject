import React from "react";
import "./services.css";

const OurServices = () => {
  const services = [
    { title: "Equipment Rental", description: "Rent farming equipment with ease." },
    { title: "Expert Advice", description: "Get guidance from agricultural experts." },
    { title: "Crop Management", description: "Tools to monitor and manage crops." },
    { title: "Soil Testing", description: "Comprehensive soil quality reports." },
    { title: "Market Access", description: "Connect with buyers and sellers." },
    { title: "Logistics Support", description: "Streamline your supply chain." },
  ];

  return (
    <div className="our-services-container">
      <h2 className="our-services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
