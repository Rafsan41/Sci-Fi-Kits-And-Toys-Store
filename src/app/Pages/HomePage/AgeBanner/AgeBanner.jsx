import React from "react";

const AgeBanner = () => {
  return (
    <div>
      <div className="carousel carousel-center max-w-md p-2 space-x-4 bg-neutral rounded-box w-[100%]">
        <div className="carousel-item">
          <img
            src="/src/assets/HomeBanner/thumb-1.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/src/assets/HomeBanner/thumb-3.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/src/assets/HomeBanner/thumb-5.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="rounded-box"
          />
        </div>
      </div>
    </div>
  );
};

export default AgeBanner;
