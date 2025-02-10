import React from "react";
import "./Founders.css";

const Founders = () => {
  const founders = [
    { name: "Ruturaj laad", photo: "https://tse4.mm.bing.net/th?id=OIF.q7SRKyCCG7m1%2fPn295ySfw&pid=Api&P=0&h=180" },
    { name: "Sanskruti Pawaskar ", photo: "https://tse4.mm.bing.net/th?id=OIF.q7SRKyCCG7m1%2fPn295ySfw&pid=Api&P=0&h=180" },
    { name: "Harsh Shinde", photo: "https://tse4.mm.bing.net/th?id=OIF.q7SRKyCCG7m1%2fPn295ySfw&pid=Api&P=0&h=180" },
  ];

  return (
    <div className="founders-container">
      <h2 className="founders-title">Our Founders</h2>
      <div className="founders-grid">
        {founders.map((founder, index) => (
          <div key={index} className="founder-item">
            <img src={founder.photo}  className="founder-photo" />
            <h3 className="founder-name">{founder.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
