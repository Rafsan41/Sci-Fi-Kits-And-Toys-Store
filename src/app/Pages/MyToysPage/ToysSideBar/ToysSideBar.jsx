import { Link } from "react-router-dom";

const ToysSideBar = () => {
  return (
    <div className="ml-4 ">
      <div className="  mr-6 mt-10  w-[100%]">
        <div className="bg-gray-400 p-5 w-[100%] rounded-lg">
          <Link to="/myToys">My Toys</Link>
        </div>
      </div>
      <div className="bg-gray-400 p-5 mt-5 rounded-lg">
        <Link to="/addProduct">add Product</Link>
      </div>
    </div>
  );
};

export default ToysSideBar;
