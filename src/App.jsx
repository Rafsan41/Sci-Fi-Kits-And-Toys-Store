import "./App.css";
import NavBar from "./app/SharedComponant/NavBar/NavBar";

import Footer from "./app/SharedComponant/Footer/Footer";
import HomeMain from "./app/Pages/HomePage/HomeMain/HomeMain";
import { Outlet } from "react-router";

function App() {
  return (
    <div className=" w-screen h-[100%]">
      <NavBar />
      <div className="h-[100%] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
