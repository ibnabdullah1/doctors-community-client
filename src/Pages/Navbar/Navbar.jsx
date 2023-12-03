import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldScroll = scrollTop > 0;

      setScrolling(shouldScroll);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const closeMenu = () => {
    setMenuVisible(false);
  };

  const navbarClasses = `navbar justify-between px-20 py-4 items-center fixed left-0 px-5 right-0 top-0 z-50 ${
    scrolling
      ? "bg-opacity-30 backdrop-blur-md"
      : "bg-opacity-0 backdrop-blur-lg"
  } max-w-7xl mx-auto bg-black text-white`;

  const menuDropdownClasses = `menu dropdown-content mt-3 z-[1] w-80 p-2 shadow bg-zinc-800 rounded ${
    menuVisible ? "bg-opacity-60 block" : "hidden"
  }`;

  const navLinks = (
    <>
      <li onClick={closeMenu}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#fff]  font-semibold "
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li onClick={closeMenu}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#fff]  font-semibold "
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#fff]  font-semibold "
              : ""
          }
        >
          Appointment
        </NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#fff]  font-semibold "
              : ""
          }
        >
          Reviews
        </NavLink>
      </li>

      <li onClick={closeMenu}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#fff]  font-semibold "
              : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#fff]  font-semibold "
              : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className={navbarClasses}>
      <div className="navbar lg:hidden">
        <div className="dropdown w-full">
          <div className="flex justify-between  w-full">
            <div className="flex items-center">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                onClick={toggleMenu}
              >
                <FaBars className="text-3xl" />
              </label>
              <div className="flex gap-2 items-center">
                <img
                  className="w-14"
                  src="https://www.svgrepo.com/show/475323/community.svg"
                  alt=""
                />
                <h2 className="text-4xl Bebas tracking-[3px] font-bold">
                  Doc Community
                </h2>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center ">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar online"
              >
                <div className="w-10 rounded-full">
                  <img
                    src="https://www.svgrepo.com/show/525577/user-circle.svg"
                    alt=""
                  />
                </div>
              </label>
            </div>
          </div>

          <ul tabIndex={0} className={menuDropdownClasses}>
            {navLinks}
          </ul>
        </div>
      </div>

      <div className=" hidden justify-center items-center  lg:flex">
        <div className="flex gap-2 items-center">
          <img
            className="w-14"
            src="https://www.svgrepo.com/show/475323/community.svg"
            alt=""
          />
          <h2 className="text-4xl Bebas tracking-[3px] font-bold">
            Doc Community
          </h2>
        </div>
      </div>
      <div className=" hidden lg:flex">
        <ul className="px-1 text-lg flex  font-semibold gap-8">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
