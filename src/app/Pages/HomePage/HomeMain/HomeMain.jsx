import { Outlet } from "react-router";
import AgeBanner from "../AgeBanner/AgeBanner";
import Banner from "../Banner/Banner";
import DoubleBanner from "../DoubleBanner/DoubleBanner";
import SliderButton from "../SliderButton/SliderButton";

const HomeMain = () => {
  return (
    <div>
      <Outlet />
      <Banner />
      <AgeBanner />
      {/* <SliderButton /> */}
      <DoubleBanner />
    </div>
  );
};

export default HomeMain;
