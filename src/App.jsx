import "./App.css";
import NavBar from "./app/SharedComponant/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "./app/SharedComponant/Footer/Footer";

function App() {
  return (
    <div className=" w-screen h-[100%]">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
