import StoreAllProduct from "../StoreAllProduct/StoreAllProduct";

const StoreMain = () => {
  return (
    <div className="ml-5 mt-5">
      <StoreAllProduct />

      <div className="btn-group mb-5">
        <button className="btn btn-md">1</button>
        <button className="btn btn-md btn-active">2</button>
        <button className="btn btn-md">3</button>
        <button className="btn btn-md">4</button>
        <button className="btn btn-md">5</button>
      </div>
    </div>
  );
};

export default StoreMain;
