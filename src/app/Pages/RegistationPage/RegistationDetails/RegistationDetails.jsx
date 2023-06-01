// import { stringify } from "postcss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegistationDetails = () => {
  const handelUserRegistation = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) toast.success("user added successfully");
        form.reset();
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-400 via-pink-300 to-cyan-200">
        <div className="hero-content flex ">
          <div className="text-center lg:text-left">
            <img
              className="w-[700px] h-[550px] rounded-lg"
              src="/src/assets/RegistationBanner/Sign up (1).gif"
              alt=""
            />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300">
            <div>
              <ToastContainer theme="colored" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-left pt-6 pl-8">
                Register Now....
              </h1>
            </div>
            <div className="card-body">
              <form onSubmit={handelUserRegistation}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">SureName</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name..."
                    name="name"
                    className="input "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input
                    type="pasword"
                    placeholder="Create Password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
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
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    <input type="submit" value="Registation" />
                  </button>
                  <p className="text-sm mr-5">
                    Already Have An Account!
                    <a
                      href="#"
                      className="label-text-alt link link-hover hover:text-red-400 text-black ml-2"
                    >
                      <Link to="/logIn">Log In</Link>
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistationDetails;
