import { useLoaderData } from "react-router";
import ToysSideBar from "../ToysSideBar/ToysSideBar";
import { ToastContainer, toast } from "react-toastify";

const UpdateToys = () => {
  const lodedProduct = useLoaderData();
  const handelUpdateProduct = (event) => {
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
    const updatedProduct = {
      name,
      manufacturer,
      rating,
      discription,
      category,
      img,
      price,
      quantity,
    };
    console.log("updating product info", updatedProduct);

    fetch(`http://localhost:5000/updatedProduct/${lodedProduct._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0)
          toast.success("Product Updated successfully");
      });
  };
  return (
    <div>
      <div className="flex justify-start">
        <form onSubmit={handelUpdateProduct} className="w-[100%]">
          <div>
            <ToastContainer theme="colored" />
          </div>
          <div className="w-[98%] mt-10 m-5  p-5 bg-gray-400  rounded-md">
            <div>
              <div className="flex justify-center bg-white  p-3 rounded-xl">
                <div className="w-[50%]  p-5">
                  {/* product name */}
                  <div className="inputbox ">
                    <input
                      className="bg-white inputmain"
                      defaultValue={lodedProduct?.name}
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
                      defaultValue={lodedProduct?.manufacturer}
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
                      defaultValue={lodedProduct?.rating}
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
                      defaultValue={lodedProduct?.discription}
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
                      defaultValue={lodedProduct?.category}
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
                      defaultValue={lodedProduct?.price}
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
                      defaultValue={lodedProduct?.quantity}
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
                      defaultValue={lodedProduct?.img}
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
              <button type="submit" className="bg-purple-400 font-extrabold">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToys;
