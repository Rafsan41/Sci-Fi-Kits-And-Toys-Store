const StoreSingleProduct = () => {
  return (
    <div>
      StoreSingleProduct
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-72"
            src="/src/assets/ProductImg/printed-summer-dress-1.jpg"
            alt="toys"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSingleProduct;
