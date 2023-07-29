import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const MyToysDetails = () => {
  // const [sellers, setSeller] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/addToys");
      setProducts(response.data);
      setSearchProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const columns = [
    {
      name: "Product Image",
      selector: (row) => (
        <img width={50} height={45} className="rounded-xl" src={row.img} />
      ),
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "manufacturer",
      selector: (row) => row.manufacturer,
      sortable: true,
    },
    {
      name: "Stock",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex justify-between">
          <div className="mr-5 tooltip" data-tip="Update">
            <button>
              <Link to={`/updateProduct/${row._id}`}>
                <FiEdit fontSize={20} />
              </Link>
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="" onClick={() => handelDelete(row._id)}>
              <MdDelete fontSize={20} />
            </button>
          </div>
        </div>
      ),
      sortable: true,
    },
  ];
  useEffect(() => {
    const searchResult = products.filter((product) => {
      return product.name.toLowerCase().match(search.toLowerCase());
    });
    setSearchProducts(searchResult);
  }, [search]);

  const handelDelete = async (_id) => {
    try {
      const apiUrl = `http://localhost:5000/addToys/${_id}`;
      const response = await axios.delete(apiUrl);
      // Handle the successful deletion
      console.log(`Data with ID ${_id} deleted successfully:`, response.data);
      if (response.data.deletedCount > 0)
        toast.success("Product Deleted successfully");

      setProducts();
      return response.data;
    } catch (error) {
      // Handle any errors that occur during the deletion process
      console.error(`Error deleting data with ID ${_id}:`, error.message);
      throw error;
    }
  };

  // const handelDelete = (_id) => {
  //   console.log("deleted", _id);
  //   fetch(`http://localhost:5000/addToys/${_id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.deletedCount > 0)
  //         toast.success("Product Deleted successfully");
  //       const remaining = products.filter((product) => product._id !== _id);
  //       setProducts(remaining);
  //     });
  // };

  return (
    <div className=" flex w-[100%] mr-5">
      <div className=" w-[100%]  mr-5">
        <div>
          <ToastContainer theme="colored" />
        </div>
        <div className=" w-[99%] mt-5 mb-10 ml-2 bg-gray-400 p-3 rounded-lg">
          <DataTable
            columns={columns}
            data={searchProducts}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="350px"
            width="90%"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            actions={
              <Link to="/addProduct">
                <div className="tooltip tooltip-left " data-tip="Add Product">
                  <button className="flex justify-start">
                    <GrAddCircle />
                  </button>
                </div>
              </Link>
            }
            subHeader
            subHeaderComponent={
              <input
                className=" bg-slate-50 border-2 border-slate-400 rounded-md p-2"
                type="text"
                placeholder="search product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          ></DataTable>
        </div>
      </div>
    </div>
  );
};

export default MyToysDetails;
