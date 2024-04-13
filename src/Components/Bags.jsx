import { useEffect, useState } from "react";
import Apiservices from "../services/Apiservices";
const Bags = () => {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    Apiservices.getBags((response) => {
      setBags(response);
    });
  }, []);

  return (
    <div className="py-8">
      <ul className=" grid grid-cols-4 gap-3 md:grid-cols-8  ">
        {bags?.map((item) => {
          return (
            <li key={item.id} className="flex flex-col  rounded-lg justify-between items-center cursor-pointer relative border border-transparent hover:border-gray-200  transition duration-300 ease-in-out">
              <a className="">
                <img className="h-[38px] w-[37px] md:h-[55px] md:w-[65px]  " src={item.image} />
              </a>
              <p className=" text-center text-[12px] py-4">{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Bags;