import ToysSideBar from "../ToysSideBar/ToysSideBar";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MyToysDetails = () => {
  const [products, setProducts] = useState([]);
  const [sellers, setSeller] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addToys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/logIn")
      .then((res) => res.json())
      .then((data) => setSeller(data));
  }, []);

  const handelDelete = (_id) => {
    console.log("deleted", _id);
    fetch(`http://localhost:5000/addToys/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0)
          toast.success("Product Deleted successfully");
        const remaining = products.filter((product) => product._id !== _id);
        setProducts(remaining);
      });
  };

  return (
    <div className=" flex w-[100%] mr-5">
      <div className="w-[20%] fixed z-10">
        <ToysSideBar />
      </div>
      <div className=" w-[80%] ml-[20%] mr-5">
        {products.map((product) => (
          <div key={product.id}></div>
        ))}
        <div>
          <ToastContainer theme="colored" />
        </div>
        <div className=" w-[80%] ml-5 mt-10 mb-10  bg-gray-400 p-5 rounded-lg">
          <table className="table w-[100%] ">
            {/* head */}
            <div className="w-[100px]">
              <tr className="w-[100%]">
                <th className="bg-white ">
                  <div className="flex justify-start">
                    <div>
                      <input type="checkbox" className="checkbox bg-blue-500" />
                    </div>
                    <div
                      className=" tooltip p-2 bg-slate-400 rounded-lg ml-2"
                      data-tip="Add Toys"
                    >
                      <Link to="/addProduct">
                        <GrAddCircle className=" " />
                      </Link>
                    </div>
                  </div>
                </th>
                <th className="bg-white">product name</th>
                <th className="bg-white">Sellar Name-Email</th>
                <th className="bg-white">Catagory</th>
                <th className="bg-white">Quantity</th>
                <th className="bg-white">Prize</th>
                <th className="bg-white">Details</th>
              </tr>
            </div>
            {products.map((product) => (
              <div className="" key={product.id}>
                {/* row 1 */}
                <tr>
                  <th className="bg-gray-300 border-none">
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox bg-blue-500 "
                      />
                    </label>
                  </th>
                  <td className="bg-gray-300 border-none">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  {sellers.map((seller) => (
                    <td className="bg-gray-300 border-none " key={seller.id}>
                      {seller.name}

                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {seller.email}
                      </span>
                    </td>
                  ))}
                  <td className="bg-gray-300 border-none">
                    {product.category}
                  </td>
                  <td className="bg-gray-300 border-none">
                    {product.quantity}
                  </td>
                  <td className="bg-gray-300 border-none">{product.price}$</td>
                  <td className="h-5 font-extrabold flex justify-center items-center text-4xl pb-16 pt-16 bg-gray-300 border-none">
                    <Link to={`/updateProduct/${product._id}`}>
                      <div
                        className=" tooltip pl-2 pr-2 mr-2 bg-slate-400 rounded-xl"
                        data-tip="Update"
                      >
                        <GrAddCircle className="w-5 " />
                      </div>
                    </Link>
                    <div
                      onClick={() => handelDelete(product._id)}
                      className=" tooltip pr-2 pl-2 bg-slate-400 rounded-xl"
                      data-tip="Delete"
                    >
                      <MdDelete className="w-5" />
                    </div>
                  </td>
                </tr>
              </div>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToysDetails;
