import logo from "../assets/arelic-logo.png";
import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const options = [
    {
      value: "About Us",
    },
    {
      value: "Mission",
    },
    {
      value: "Vision",
    },
    {
      value: "History",
    },
  ];

  function handleMenu(value) {
    setMenu(value);
  }
  return (
    <>
      <nav className={`flex justify-between items-center w-[92%] mx-auto`}>
        <div className={`mb-5`}>
          <img src={logo} alt={`NGO logo`} className={`h-16`} />
        </div>
        <div
          className={` lg:static absolute lg:min-h-fit min-h-[60vh] left-0 ${menu && `top-[15%]`} top-[-100%] duration-300 bg-white justify-center lg:w-auto w-full flex items-center mb-5`}
        >
          <ul
            className={`flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] text-xl gap-8`}
          >
            <li>
              <a href={`#`}>Home</a>
            </li>
            <li>
              <a href={`#`}>About Us</a>
            </li>
            <li>
              <a href={`#`}>Our Work</a>
            </li>
            <li>
              <a href={`#`}>Projects</a>
            </li>
            <li>
              <a href={`#`}>Media</a>
            </li>
            <li>
              <a href={`#`}>Get Involved</a>
            </li>
            <li>
              <a href={`#`}>Contact Us</a>
            </li>
            <li>
              <a href={`#`}>Blog</a>
            </li>
            <li>
              <a href={`#`}>Donate</a>
            </li>
          </ul>
        </div>
        <div
          className={`flex items-center gap-6 lg:hidden`}
          onClick={() => (menu ? handleMenu(false) : handleMenu(true))}
        >
          <i className="fa-solid fa-bars text-3xl cursor-pointer"></i>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
