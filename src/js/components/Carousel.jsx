import React from "react";
import Home from "../views/Home.jsx";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/id/237/300"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/237/300"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/237/300"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Carousel;
