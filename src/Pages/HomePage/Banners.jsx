import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Array of image URLs
const imageUrls = [
  "/assets/banners/1.png",
  "/assets/banners/2.jpg",
  "/assets/banners/3.png",
  "/assets/banners/5.jpg",
  "/assets/banners/6.jpg",
];

// Create items array with images
const items = imageUrls.map((url, index) => (
  <div className="item" data-value={index + 1} key={index}>
    <img
      src={url}
      alt={`Slide ${index + 1}`}
      style={{ width: "100%" }}
    />
  </div>
));

const Banners = () => (
  <AliceCarousel
    autoPlay
    
    autoPlayInterval={2000}
    animationDuration={2000}
    autoHeight
    infinite
    disableDotsControls
    disableButtonsControls
    mouseTracking
    items={items}
  />
);

export default Banners;
