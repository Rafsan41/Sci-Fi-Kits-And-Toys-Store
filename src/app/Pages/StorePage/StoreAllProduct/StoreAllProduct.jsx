import { useEffect, useState } from "react";
import StoreSingleProduct from "../StoreSingleProduct/StoreSingleProduct";
// import { useLoaderData } from "react-router";

const StoreAllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div className="store-container grid grid-cols-4 gap-[5px] ">
        {products.map((product) => (
          <StoreSingleProduct
            key={product.id}
            product={product}
          ></StoreSingleProduct>
        ))}
      </div>
    </div>
  );
};

export default StoreAllProduct;
