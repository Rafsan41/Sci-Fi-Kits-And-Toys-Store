import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-purple-300 top-fixed">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            Sci-Fi Kits And Store
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control sm:invisible xl:visible">
            <input
              type="text"
              placeholder="Search"
              className="input  bg-gray-50"
            />
          </div>
          <div className="flex-none mr-10">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/allToys">All Toys</Link>
              </li>
              <li>
                <Link to="/myToys">My Toys</Link>
              </li>
              <li tabIndex={0}>
                <a>
                  More
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className=" z-10 bg-base-100">
                  <li>
                    <Link to="/aboutUs">About Us</Link>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                  <li>
                    <a>Terms And Conditions</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className=" flex justify-center items-center gap-5">
            <div className="flex justify-center">
              <div className="flex justify-center text-gray-50 gap-5 mr-5">
                <div>
                  <button className="bg-blue-400">
                    <Link to="/logIn">Log In</Link>
                  </button>
                </div>
                <div>
                  <button className="bg-blue-400">
                    <Link to="/">Log Out</Link>
                  </button>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ">
                    <img src="/src/assets/Profile/profile.JPG" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-orange-300 rounded-box w-52"
                >
                  <li>
                    <small className="font-bold text-xs">Rafsan dipto</small>
                  </li>
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a className="justify-between">
                      My wistlist
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
