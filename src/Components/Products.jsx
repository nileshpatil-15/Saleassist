import { useEffect, useState } from "react";
import ApiService from "../services/Apiservices";
import SingleProduct from "./SingleProducts";
import { PropagateLoader } from "react-spinners";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Effect hook to fetch products data when component mounts
    ApiService.getProducts((response) => {
      // Calling API service to get products data
      setProducts(response);
    });
  }, []);

  return (
    <div className="pt-8 pb-10">
      {/* Conditional rendering based on whether products data is available */}
      {products.length > 0 ? (
        <ul className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 lg:gap-6">
          {products?.map((item) => {
            return (
              <li
                key={item.id}
                className="h-[310px] md:h-[360px] lg:h-[380px] w-[150px] md:w-[200px] border border-transparent hover:border-gray-200 transition duration-300 ease-in-out rounded-lg"
              >
                <SingleProduct prop={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        // If products data is not available, render a loading spinner
        <div className="text-center mt-56">
          <PropagateLoader color={"#ffffff"} />
        </div>
      )}
    </div>
  );
};

export default Products;
