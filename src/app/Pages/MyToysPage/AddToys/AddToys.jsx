import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddToys.css";
import { BiStore } from "react-icons/bi";
import { Link } from "react-router-dom";

const AddToys = () => {
  const handelAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const manufacturer = form.manufacturer.value;
    const rating = form.rating.value;
    const discription = form.discription.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const img = form.img.value;
    const product = {
      name,
      manufacturer,
      rating,
      discription,
      category,
      img,
      price,
      quantity,
    };
    console.log(product);
    fetch("http://localhost:5000/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) toast.success("Product added successfully");
        form.reset();
      });
  };

  return (
    <div>
      <div className="flex justify-center ">
        <form onSubmit={handelAddProduct} className="w-[100%]">
          <div>
            <ToastContainer theme="colored" />
          </div>
          <div className="w-screen mt-10 m-5  p-5 bg-gray-400  rounded-md">
            <button className="flex justify-start">
              <div
                className=" flex  tooltip mt-3 text-stone-100 m-2  rounded-lg "
                data-tip="My Toys"
              >
                <Link to="/mytoys">
                  <BiStore fontSize={"30px"} />
                </Link>
              </div>
            </button>
            <div>
              <div className="flex justify-center bg-white  p-3 rounded-xl">
                <div className="w-[50%]  p-5">
                  {/* product name */}
                  <div className="inputbox ">
                    <input
                      className="bg-white inputmain"
                      name="name"
                      type="text"
                      required
                    />
                    <span className="inputSpan">Procuct Name</span>
                  </div>
                  <br />
                  {/* product Manufacturer */}
                  <div className="inputbox ">
                    <input
                      className="bg-white inputmain"
                      type="text"
                      name="manufacturer"
                      required
                    />
                    <span className="inputSpan">Manufacturer</span>
                  </div>
                  <br />
                  {/* product rating */}
                  <div className="inputbox ">
                    <input
                      className="bg-white inputmain"
                      type="number"
                      name="rating"
                      required
                    />
                    <span className="inputSpan">Rating</span>
                  </div>
                  <br />
                  {/* product description */}
                  <div className="inputbox">
                    <input
                      className="bg-white inputmain"
                      type="text"
                      name="discription"
                      required
                    />
                    <span className="inputSpan">Discrption</span>
                  </div>
                </div>
                <div className="w-[50%] p-5">
                  {/* input product category*/}
                  <div className="inputbox ">
                    <input
                      className="bg-white inputmain"
                      type="text"
                      name="category"
                      required
                    />
                    <span className="inputSpan">Product Category</span>
                  </div>
                  <br />
                  <div className="inputbox ">
                    <input
                      className="bg-white inputmain"
                      type="number"
                      name="price"
                      required
                    />
                    <span className="inputSpan">Product Price</span>
                  </div>
                  <br />
                  <div className="inputbox ">
                    <input
                      className="bg-white inputmain"
                      type="number"
                      name="quantity"
                      required
                    />
                    <span className="inputSpan">Product Quantity</span>
                  </div>
                  <br />
                  <div className="inputbox ">
                    <input
                      className="bg-white inputmain"
                      type="text"
                      name="img"
                      required
                    />
                    <span className="inputSpan">Product Image Link</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3 flex justify-end">
              <button className="bg-purple-400 font-extrabold">submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
