import { Outlet } from "react-router";
import AgeBanner from "../AgeBanner/AgeBanner";
import Banner from "../Banner/Banner";
import DoubleBanner from "../DoubleBanner/DoubleBanner";

const HomeMain = () => {
  return (
    <div>
      <Outlet />
      <Banner />
      <AgeBanner />
      <DoubleBanner />
    </div>
  );
};

export default HomeMain;
