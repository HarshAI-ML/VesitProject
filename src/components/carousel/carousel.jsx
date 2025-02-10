import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import "./Carousel.css"; // Add custom styles if needed

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        showThumbs={false} 
        infiniteLoop 
        autoPlay 
        interval={3000} 
        stopOnHover 
        dynamicHeight={false}
        showStatus={false}
      >
        <div>
          <img src="public/locales/images/kisanlogo.webp" alt="Slide 1" />
        </div>
        <div>
          <img src="https://wallpaperaccess.com/full/1598237.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://wallpaperaccess.com/full/1598237.jpg" alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
