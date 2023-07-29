import "./Banner.css";
import playingBoy from "../../../../assets/HomeBanner/funny-boy-playing-lego-19803454.jpg";
import playingBoy2 from "../../../../assets/HomeBanner/images.jpg";
import hutToy from "../../../../assets/HomeBanner/hut-toy.jpg";
const Banner = () => {
  return (
    <div className=" h-[100vh]">
      <div className="carousel w-[100%] h-[100vh] p-5 ml-2">
        {/* slide 1  start */}
        <div
          id="slide1"
          className="carousel-item relative w-[100%] h-[85vh]  bg-white mx-[2%]"
        >
          <p>hello1</p>
          <img
            src={playingBoy}
            className="w-[screen] h-[80vh]  p-[5%] ml-[30%]"
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
        {/* slide 1 end */}
        {/* slide 2 start  */}
        <div
          id="slide2"
          className="carousel-item relative w-[100%] h-[85vh]  bg-white mx-[2%]"
        >
          <p>hello2</p>
          <img src={playingBoy2} className="w-[70%] h-[80vh] p-[5%] ml-[30%]" />
          <div className="absolute flex justify-between transform:5000 -translate-y-1/2 left-5 right-5 top-1/2  h-[50%]">
            <a href="#slide1" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>
        {/* slide 2 end  */}
        {/* slide 3 start */}
        <div
          id="slide3"
          className="carousel-item relative w-[100%] h-[85vh]  bg-white mx-[2%]"
        >
          <p>hello3</p>
          <img src={hutToy} className="w-[100%] h-[80vh] p-[5%] ml-[30%]" />
          <div className="absolute flex justify-between transform:5000 -translate-y-1/2 left-5 right-5 top-1/2  h-[50%]">
            <a href="#slide2" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>
        {/* slide 3 end  */}
        {/* slide 4 start  */}
        <div
          id="slide4"
          className="carousel-item relative w-[100%] h-[85vh]  bg-white mx-[2%]"
        >
          <p>hello4</p>
          <img
            src="/src/assets/HomeBanner/funny-boy-playing-lego-19803454.jpg"
            className="w-[70%] h-[80vh] p-[5%] ml-[30%]"
          />
          <div className="absolute flex justify-between transform:5000 -translate-y-1/2 left-5 right-5 top-1/2  h-[50%]">
            <a href="#slide4" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>
        {/* slide 4 end  */}
      </div>
    </div>
  );
};

export default Banner;
