import Navbar from "../Components/Navbar";
import Bags from "../Components/Bags";
import Category from "../Components/Category";
import Products from "../Components/Products";
const Dashboard = () => {
  return (
    <div className=" px-4 max-w-[1280px] ">
      <Navbar />
      <Bags />
      <Category />
      <Products />
    </div>
  );
};

export default Dashboard;
