const StoreSingleProduct = (props) => {
  const {
    id,
    name,
    category,
    img,
    price,
    manufacturer,
    available,
    description,
  } = props.product;

  return (
    <div>
      <div className="card w-full sm:w-64 h-[500px] bg-pink-200 shadow-xl mb-10 rounded-lg">
        <img
          className="w-full h-52 object-cover rounded-t-lg"
          src={img}
          alt="Toy"
        />

        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold mb-2">{name}</h2>
          <div className="text-start mb-4">
            <p className="text-gray-700 text-sm mb-2">{category}</p>
            <p className="text-lg font-bold mb-2">${price}</p>
            <p className="text-gray-700 text-sm mb-2">By {manufacturer}</p>
            <div className="rating mt-2 ">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
              />
            </div>
          </div>

          <div className="card-actions justify-start flex-grow">
            {/* The button to open modal */}
            <label htmlFor={`my-modal-${id}`} className="badge">
              Details
            </label>

            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id={`my-modal-${id}`}
              className="modal-toggle"
            />
            <div className="modal modal-bottom xxl:modal-middle pb-20 pl-16 pr-16">
              <div className="modal-box bg-orange-300 rounded-b-lg">
                <div className="card xl:card-side bg-white">
                  <figure>
                    <img className="h-80 object-cover" src={img} alt="Toy" />
                  </figure>
                  <div className="card-body bg-green-200 text-left p-4">
                    <h2 className="card-title text-lg font-semibold mb-2">
                      {name}
                    </h2>
                    <p className="text-gray-700 text-sm mb-4">{category}</p>
                    <p className="text-sm">{description}</p>
                    <p className="text-gray-700 text-sm mt-2">
                      Price: <b>${price}</b>
                      <p>stock : 50 </p>
                      <p>
                        qunatity{" "}
                        <div className="flex justify-start border-2 border-black w-10">
                          <div className=" border-r-2 border-black w-5 p-[2px]">
                            +1
                          </div>
                          <div className="  border-black w-5 p-[2px]">-1</div>
                        </div>
                      </p>
                    </p>
                    <div className="rating mt-2">
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-yellow-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-yellow-500"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-yellow-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-yellow-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-yellow-500"
                      />
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <label htmlFor={`my-modal-${id}`} className="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSingleProduct;
