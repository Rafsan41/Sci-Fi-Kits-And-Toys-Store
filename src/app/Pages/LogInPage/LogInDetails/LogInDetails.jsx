import { Link } from "react-router-dom";

const LogInDetails = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="py-6 pl-6">
              <img
                className="w-[700px]"
                src="https://i.ibb.co/7tLJswn/vecteezy-concept-digital-marketing-flat-illustration-gradient.jpg"
                alt=""
              />
            </p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-emerald-300">
            <div className="text-left pl-10 pt-5 text-3xl font-extrabold">
              Login here
            </div>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input bg-opacity-20"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input bg-opacity-20"
                />
                <label className="label">
                  <div className="text-left">
                    <a
                      href="#"
                      className="label-text-alt  hover:text-blue-400 text-black"
                    >
                      Forgot password?
                    </a>
                    <br />
                    <div className="flex justify-start">
                      <div className="mt-[3px] ">
                        <div className="form-control">
                          <label className="cursor-pointer label">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-info"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="mt-2">remember password</div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-none bg-purple-500 text-white">
                  Login
                </button>
                <p className="text-sm mr-5">
                  New Here!
                  <a
                    href="#"
                    className="label-text-alt link link-hover hover:text-red-400 text-black ml-2"
                  >
                    <Link to="/register">Register</Link>
                  </a>
                </p>
                <p>or</p>

                <p>sign in with</p>
                <button className="btn border-none bg-teal-700 text-white">
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInDetails;
