const Banner = () => {
  return (
    <div className=" h-[100vh]">
      <div className="carousel w-[100%] h-[100vh] p-5 ml-2">
        <div
          id="slide1"
          className="carousel-item relative w-[100%] h-[85vh] border-2 border-red-500 bg-white"
        >
          <p>hello</p>
          <img
            src="/src/assets/HomeBanner/funny-boy-playing-lego-19803454.jpg"
            className="w-[70%] h-[80vh] p-[5%] ml-[30%]"
          />
          <div className="absolute flex justify-between transform:5000 -translate-y-1/2 left-5 right-5 top-1/2  h-[50%]">
            <a href="#slide4" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[70vh]">
          <img
            src="/src/assets/HomeBanner/images.jpg"
            className="w-[70%] h-[100%] p-[5%] ml-[40%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
