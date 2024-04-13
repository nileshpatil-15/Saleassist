import  { useState } from "react";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="flex justify-between h-[90px] pt-4 ">
      <div>
        {/* Logo */}
        <img className="cursor-pointer"  src="https://iili.io/JE050MX.png" alt="Logo" />
      </div>

      {/* Hamburger Icon (visible only below md) */}
      <div className="md:hidden">
        <button className="focus:outline-none" onClick={toggleDrawer}>
          <i className="fa-solid fa-bars text-2xl "></i>
        </button>
      </div>

      {/* Navigation Links and Icons (visible only above md) */}
      <nav className="hidden md:flex items-end gap-8">
        <a className="text-sm cursor-pointer font-normal hover:text-blue-200">Bags</a>
        <a className="text-sm   cursor-pointer font-normal hover:text-blue-200">Travel</a>
        <a className="text-sm cursor-pointer font-normal hover:text-blue-200">Accessories</a>
        <a className="text-sm cursor-pointer font-normal hover:text-blue-200">Gifting</a>
        <a className="text-sm cursor-pointer font-normal hover:text-blue-200">Jewelry</a>
      </nav>

      {/* Drawer (visible below md when opened) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow">
            <div className="flex justify-end p-4">
              <button className="focus:outline-none" onClick={toggleDrawer}>
                <i className="fa-solid fa-times text-black text-2xl"></i>
              </button>
            </div>
            <div className="p-4">
              <a
                className="block py-2 px-4 text-gray-900 hover:bg-gray-200   rounded-xl"
                href="#"
              >
                Bags
              </a>
              <a
                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded-xl"
                href="#"
              >
                Travel
              </a>
              <a
                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded-xl"
                href="#"
              >
                Accessories
              </a>
              <a
                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded-xl"
                href="#"
              >
                Gifting
              </a>
              <a
                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded-xl"
                href="#"
              >
                Jewelry
              </a>
            </div>
          </div>
        </div>
      )}
      <div className=" hidden md:flex gap-6 items-start">
      
        {/* Removed 'hidden md:flex' */}
        <button className="">
          <i style={{ fontSize: '20px' }}  className="fa-solid fa-magnifying-glass h-[258px]"></i>
        </button>
        <button className="">
          <i style={{ fontSize: '20px' }}  className="fa-regular fa-user"></i>{" "}
        </button>
        <button className="">
          <i  style={{ fontSize: '20px' }} className="fa-regular fa-bookmark"></i>{" "}
        </button>
        <button className="">
          <i style={{ fontSize: '20px' }}  className="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
    </header>
  );
}

export default Navbar;