import React from "react";

function Slideshow() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ margin: 0, padding: 0 }}
    >
      <div className="carousel-inner m-0 p-0">

        <div className="carousel-item active">
          <img
            src="assets/images/slideshow_bg8.jpg"
            className="d-block w-100"
            alt="slide1"
            style={{ height: "450px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="assets/images/slideshow_bg9.jpg"
            className="d-block w-100"
            alt="slide2"
            style={{ height: "450px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="assets/images/slideshow_bg7.jpg"
            className="d-block w-100"
            alt="slide3"
            style={{ height: "450px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="assets/images/slideshow_bg8.jpg"
            className="d-block w-100"
            alt="slide4"
            style={{ height: "450px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="assets/images/slideshow_bg9.jpg"
            className="d-block w-100"
            alt="slide5"
            style={{ height: "450px", objectFit: "cover" }}
          />
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slideshow;
