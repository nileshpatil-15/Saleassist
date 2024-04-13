import { useEffect, useState } from "react";
import ApiService from "../services/Apiservices";
import SingleProduct from "./SingleProduct";
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
   flex   flex-wrap gap-4 items-center justify-center md:justify-start ">
  {products?.map((item) => {
    return (
      <li key={item.id} className="  h-[380px] w-[150px] md:h-[480px] md:w-[250px] border rounded-lg overflow-hidden border-none  lg:w-[22%]">
        <SingleProduct prop={item} />
      </li>
    );
  })}
</ul>

    </div>
  );
};

export default Products;