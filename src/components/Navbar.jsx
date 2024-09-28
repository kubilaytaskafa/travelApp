import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white">
      <div className="container px-4 flex justify-between items-center h-16 ">
        <h3 className="text-2xl font-bold ">KuŞe Travel</h3>
        <div className="hidden md:flex space-x-4 text-sm font-bold items-center ">
          <Link
            to="/"
            className="px-6 py-2 hover:bg-gray-500 hover:text-white  transition duration-400 "
          >
            Home
          </Link>
          <Link
            to="/Gallery"
            className="px-6 py-2 hover:bg-gray-500 hover:text-white  transition duration-400"
          >
            Gallery
          </Link>
          <Link
            to="/Contact"
            className="px-6 py-2 hover:bg-gray-500 hover:text-white transition duration-400  "
          >
            Contact
          </Link>
          <Link
            to="/About"
            className="px-6 py-2 hover:bg-gray-500 hover:text-white transition duration-400 "
          >
            About
          </Link>
          <button className="py-2 px-6 border bg-gray-300 hover:bg-gray-800 hover:text-white transition duration-400 ">
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden flex space-y-6 py-4 flex-col bg-white items-center ">
          <Link
            to="/"
            className="px-6 py-2 hover:bg-gray-500 hover:text-white  transition duration-400 "
          >
            Home
          </Link>
          <Link
            to="/Gallery"
            className="px-6 py-2 hover:bg-gray-500 hover:text-white  transition duration-400"
          >
            Gallery
          </Link>
          <Link
            to="/Contact"
            className="px-6 py-2 hover:bg-gray-500 hover:text-white transition duration-400  "
          >
            Contact
          </Link>
          <Link
            to="/About"
            className="px-6 py-2 hover:bg-gray-500 hover:text-white transition duration-400 "
          >
            About
          </Link>
          <button className="py-2 px-6 border bg-gray-300 hover:bg-gray-800 hover:text-white transition duration-400 ">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
