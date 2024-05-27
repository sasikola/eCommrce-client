import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = ({ toggleModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (buttonRef.current && popoverRef.current) {
      createPopper(buttonRef.current, popoverRef.current, {
        placement: "bottom",
      });
    }
  }, [isPopoverVisible]);

  const handleButtonClick = () => {
    setIsPopoverVisible((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="flex flex-wrap">
        <section className="relative mx-auto">
          {/* Navbar */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className=" flex justify-between px-5 xl:px-12 py-6  w-full items-center">
              <Link to="/" className="text-3xl font-bold font-heading">
                {/* <img className="h-9" src="logo.png" alt="logo"> */}
                MS
              </Link>

              {userInfo ? (
                <>
                  <div className="hidden xl:flex items-center space-x-5">
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                      />
                    </div>
                    <Link to="/">
                      <IoHomeOutline size={23} />
                    </Link>
                    <a className="hover:text-gray-200" href="# ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </a>
                    <a
                      className="flex items-center hover:text-gray-200"
                      href=" #"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                      </span>
                    </a>

                    <button
                      ref={buttonRef}
                      onClick={handleButtonClick}
                      className="flex items-center hover:text-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    {/* popover content */}
                    <div data-popper-arrow></div>
                    <div
                      ref={popoverRef}
                      className={`z-60 inline-block text-sm transition-opacity duration-500 bg-white border border-gray-200 shadow-sm ${
                        isPopoverVisible
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      } dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}
                      role="tooltip"
                      style={{ marginTop: "30px" }}
                    >
                      <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 dark:bg-gray-600">
                        <p className="text-center font-semibold text-white text-2xl">
                          {userInfo?.name}
                        </p>
                      </div>
                      <div className="px-5 py-3 flex flex-col justify-start items-start">
                        <Link to="/profile" className="px-3 py-3">
                          Profile
                        </Link>
                        <div>
                          <button
                            onClick={handleLogout}
                            className="py-1 px-2 mt-2"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden xl:flex items-center space-x-5">
                    <Link to="/">
                      <IoHomeOutline size={23} />
                    </Link>
                    <a className="hover:text-gray-200" href="# ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </a>
                    <a
                      className="flex items-center hover:text-gray-200"
                      href=" #"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                      </span>
                    </a>

                    <button
                      onClick={() => {
                        navigate("/login");
                        toggleModal(); // Optionally close the modal after navigation
                      }}
                      className="flex items-center hover:text-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
            {/* Responsive Navbar in mobile view */}
            {userInfo ? (
              <>
                <div className="md:hidden flex items-center">
                  <div className="flex items-center space-x-5 mr-4">
                    {/* home */}
                    <Link to="/">
                      <IoHomeOutline size={23} />
                    </Link>

                    <a className="hover:text-gray-200" href="# ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </a>
                    <a
                      className="flex items-center hover:text-gray-200"
                      href=" #"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                      </span>
                    </a>
                    <button
                      ref={buttonRef}
                      onClick={handleButtonClick}
                      className="flex items-center hover:text-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <div data-popper-arrow></div>
                    <div
                      ref={popoverRef}
                      className={`z-60 inline-block text-sm transition-opacity duration-500 bg-white border border-gray-200 shadow-sm ${
                        isPopoverVisible
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      } dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}
                      role="tooltip"
                      style={{ marginTop: "30px" }}
                    >
                      <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 dark:bg-gray-600">
                        <p className="text-center font-semibold text-white text-2xl">
                          {userInfo?.name}
                        </p>
                      </div>
                      <div className="px-5 py-3 flex flex-col justify-start items-start">
                        <Link to="/profile" className="px-3 py-3">
                          Profile
                        </Link>
                        <div>
                          <button
                            onClick={handleLogout}
                            className="py-1 px-2 mt-2"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="md:hidden flex items-center">
                  <div className="flex items-center space-x-5 mr-4">
                    <Link to="/">
                      <IoHomeOutline size={23} />
                    </Link>
                    <a className="hover:text-gray-200" href="# ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </a>
                    <a
                      className="flex items-center hover:text-gray-200"
                      href=" #"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                      </span>
                    </a>
                    {/* Sign In / Register */}
                    <button
                      onClick={() => {
                        navigate("/login");
                        toggleModal(); // Optionally close the modal after navigation
                      }}
                      className="flex items-center hover:text-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </nav>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="xl:hidden flex flex-col items-center bg-gray-900 text-white space-y-5 py-6">
              <li>
                <a className="hover:text-gray-200" href="# ">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="# ">
                  Category
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href=" #">
                  Collections
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="# ">
                  Contact Us
                </a>
              </li>
            </ul>
          )}
        </section>
      </div>
    </>
  );
};

export default Navbar;
