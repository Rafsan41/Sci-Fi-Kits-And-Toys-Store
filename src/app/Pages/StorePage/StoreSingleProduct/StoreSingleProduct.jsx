const StoreSingleProduct = (props) => {
  console.log(props);
  const { name, category, price, manufacturer } = props.product;

  return (
    <div>
      <div className="card w-64 h-[400px] bg-pink-200 shadow-xl mb-10">
        <figure>
          <img
            className="w-64 h-52  rounded"
            src="/src/assets/ProductImg/printed-summer-dress-1.jpg"
            alt="toys"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
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
