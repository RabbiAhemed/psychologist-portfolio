import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner mt-5 pt-5">
      <div className="text-center banner-left">
        <p id="banner-header">Growth, healing and hope</p>
        <p id="banner-tagline">From the comfort of your own space</p>
        <p id="banner-text">Individual therapy for adults</p>
        <button id="banner-btn">Book Session</button>
      </div>
      <div>
        <img src="https://i.ibb.co/6XfGGwd/cropped.jpg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Banner;
