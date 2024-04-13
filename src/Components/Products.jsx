import { useEffect, useState } from "react";
import ApiService from "../services/Apiservices";
import SingleProduct from "./SingleProducts";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getProducts((response) => {
      setProducts(response);
    });
  }, []);
  console.log(products[0]?.title)

  return (
    <div className="pt-8">
   <ul className="
   grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 lg:gap-6">
  {products?.map((item) => {
    return (
      <li key={item.id} className="  h-[380px] w-[150px]  md:w-[200px]    border border-transparent hover:border-gray-200  transition duration-300 ease-in-out rounded-lg ">
        <SingleProduct prop={item} />
      </li>
    );
  })}
</ul>

    </div>
  );
};

export default Products;