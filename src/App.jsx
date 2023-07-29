import "./App.css";
import NavBar from "./app/SharedComponant/NavBar/NavBar";

import Footer from "./app/SharedComponant/Footer/Footer";

import { Outlet } from "react-router";

function App() {
  return (
    <div className=" w-screen h-[100%]">
      <NavBar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
