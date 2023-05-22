const StoreSingleProduct = (props) => {
  console.log(props.product);
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

  //   console.log(name);

  return (
    <div>
      <h2></h2>
      <div className="card w-64 h-[400px] bg-pink-200 shadow-xl mb-10">
        <img className="w-64 h-52  rounded" src={img} alt="toys" />

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="text-start">
            <p> {category}</p>
            <p> {price}$</p>
            <p>By {manufacturer}</p>
            <div className="rating">
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
          <div className="card-actions justify-start">
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className=" badge">
              Details
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom xxl:modal-middle pb-20 pl-16 pr-16">
              <div className="modal-box bg-orange-300 rounded-b-lg">
                <div className="card xl:card-side bg-whit ">
                  <figure>
                    <img className="h-80" src={img} />
                  </figure>
                  <div className="card-body bg-green-200 text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>{category}</p>
                    <p>{description}</p>
                    <p>
                      Price: <b>{price}</b>
                    </p>
                    <div className="rating">
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
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">add</button>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">
                    close!
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
