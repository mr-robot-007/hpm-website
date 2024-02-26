import { IoMenu } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Header() {
  return (
    <div className=" top-0 left-0 bg-black w-full ">
      <div className="  w-full items-center h-2 bg-red-700 sm:h-auto sm:p-2 sm:flex sm:justify-between text-white font-semibold text-md md:text-xl ">
        <h4 className=" sm:block hidden">+91 8368582302</h4>
        <h4 className=" sm:block hidden text-center">
          India's No. 2 Portable Generators Company Since - 1995
        </h4>
        <div className="sm:flex gap-2 hidden ">
          <FaFacebookF className="text-xl" />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
      <div className="w-full h-2 bg-blue-700 sm:h-auto  sm:p-2 text-white font-semibold text-xl text-center ">
        <p className="sm:block hidden">
          Himalayan Power Machine Manufacturing Co.
        </p>
      </div>
      <div className="flex justify-between p-2 items-center">
        <div className="text-white text-4xl">
          <IoMenu />
        </div>
        <img
          className="h-12 object-contain"
          src="https://hpmgenerators.com/wp-content/uploads/2023/10/cropped-logo1.png"
          alt=""
        />
        <button className="text-white text-2xl">Login</button>
      </div>
    </div>
  );
}

export default Header;
