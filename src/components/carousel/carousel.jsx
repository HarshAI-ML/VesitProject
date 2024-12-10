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
          <img src="https://tse1.mm.bing.net/th?id=OIP.PcRg36hCRMfZuZZNSP_t4QHaEK&pid=Api&P=0&h=180" alt="Slide 1" />
        </div>
        <div>
          <img src="https://tse1.mm.bing.net/th?id=OIP.qYtf8jK6RsCbHLtYbgJxsAHaC9&pid=Api&P=0&h=180" alt="Slide 2" />
        </div>
        <div>
          <img src="https://tse1.mm.bing.net/th?id=OIP.qYtf8jK6RsCbHLtYbgJxsAHaC9&pid=Api&P=0&h=180" alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;