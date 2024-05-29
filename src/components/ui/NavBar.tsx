import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
import Logo from "../../assets/logo-header.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div>
      <div className="bg-transparent z-50  md:bg-gradient-to-l md:from-neutral-500 to-[#898864] w-full fixed px-3 py-4 h-20 md:h-28  flex justify-between md:px-24 ">
        <div className="md:hidden">
          <HiBars3BottomLeft
            onClick={() => setOpenNav(true)}
            className="size-8 text-[#c7b72c] cursor-pointer"
          />
        </div>
        <div className="md:flex hidden mt-8">
          <ul className="flex justify-around space-x-4">
            <li className="text-white  font-semibold text-lg">
              <Link to="/project">PROJECTS</Link>
            </li>
            <li className="text-white  font-semibold text-lg">
              <Link to="/design">DESIGN</Link>
            </li>
            <li className="text-white  font-semibold text-lg">SHOWROOM</li>
            <li className="text-white  font-semibold text-lg">OUR TEAM</li>
          </ul>
        </div>
        <div>
          <img
            src={Logo}
            alt="logo"
            className="size-40 -mt-14 md:bg-black md:h-20 md:mt-1"
          />
        </div>
      </div>
      <div
        className={`modal md:hidden transition-all duration-500 ${
          openNav ? "" : "hidden"
        }`}
      >
        <div className="fixed h-full z-50   bg-[#5f5711] top-0 w-1/2 left-0 md:hidden">
          <HiXMark
            onClick={() => setOpenNav(false)}
            className="size-8 absolute cursor-pointer left-3 top-5 text-white"
          />
          <ul className="pt-20 px-4 text-center">
            <li className="  cursor-pointer font-medium text-white p-2 hover:bg-[#c7b72c] hover:text-white">
              <Link to="/">HOME</Link>
            </li>
            <li className="  cursor-pointer mt-2 font-medium text-white p-2 hover:bg-[#c7b72c] hover:text-white">
              <Link to="/design">DESIGN</Link>
            </li>
            <li className="  cursor-pointer  font-medium text-white p-2 hover:bg-[#c7b72c] hover:text-white ">
              <Link to="/project">PROJECTS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
