import "./App.css";
import NavBar from "./app/SharedComponant/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "./app/SharedComponant/Footer/Footer";

function App() {
  return (
    <div className="border-2 border-red-400 w-screen h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
