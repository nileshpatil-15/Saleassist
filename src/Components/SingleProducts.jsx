import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { FaRupeeSign } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
function SingleProduct({ prop }) {
  // eslint-disable-next-line react/prop-types
  const { title, price, image } = prop;
  const [bookmark, setBookmark] = useState("fa-regular fa-bookmark");
  const toggleBookmark = () => {
    if (bookmark === "fa-regular fa-bookmark") {
      setBookmark("fa-solid fa-bookmark");
    } else {
      setBookmark("fa-regular fa-bookmark");
    }
  };

  return (
    <div className="flex flex-col border border-none cursor-pointer relative">
      <button onClick={toggleBookmark} className="absolute top-3 right-3 z-10">
        <i
          style={{ fontSize: "30px" }}
          className={`${bookmark} text-black`}
        ></i>{" "}
      </button>
      <img className="border rounded-lg" src={image} />
      <div className=" p-2 ">
        <h2
          style={{ fontWeight: 500 }}
          className="text-[15px] md:text-[17px] h-[35px]"
        >
          {title}
        </h2>
        <div className="flex justify-between py-3">
          <div className="flex items-center flex-wrap">
            <FaRupeeSign />
            <p className="font-bold">{price}</p>
            <div className="self-end pb-1 pl-2">
              <span className="text-[12px]">8999</span>
              <span
                style={{ fontWeight: 500 }}
                className="text-[12px] text-[#2FC14F] font-[500]"
              >
                (50% Off)
              </span>
            </div>
          </div>
          <img
            className="h-[30px] w-[26px]"
            src="https://iili.io/JEEvUdu.png"
          />
        </div>
      </div>
    </div>
  );
}

// Define prop types for SingleProduct component
SingleProduct.propTypes = {
  title: PropTypes.string.isRequired, // title is required and must be a string
  price: PropTypes.number.isRequired, // price is required and must be a number
};

export default SingleProduct;
