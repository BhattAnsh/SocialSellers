"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Analyze",
    path: "/analyze",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/#contact",
    newTab: false,
  },
];

const Header = () => {
  const { data: session } = useSession();
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  });

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-40 flex w-full items-center bg-transparent ${
        sticky
          ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="w-[180px] flex-shrink-0">
            <Link
              href="/"
              className={`block ${
                sticky ? "py-5 lg:py-2" : "py-8"
              }`}
            >
              <span className="text-xl font-bold text-[#0B63E5]">
                SOCIAL SELLERS
              </span>
            </Link>
          </div>

          {/* Center Menu */}
          <div className="flex-grow flex justify-center">
            <nav
              id="navbarCollapse"
              className={`absolute right-0 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-auto lg:max-w-full lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none ${
                !navbarOpen ? "hidden" : ""
              }`}
            >
              <ul className="block lg:flex lg:items-center lg:justify-center">
                {menuData.map((menuItem) => (
                  <li key={menuItem.id} className="group relative">
                    <Link
                      href={menuItem.path}
                      className={`flex py-2 text-base text-dark group-hover:text-[#0B63E5] dark:text-white lg:mr-0 lg:inline-flex lg:px-8 lg:py-6`}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Section - Updated Auth Section */}
          <div className="flex items-center gap-4">
            <Link href={"/about"}><div className="about font-normal text-md hover:text-[#0B63E5]">About</div></Link>
            {/* {session ? (
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2"
                >
                  {session.user?.image && (
                    <Image
                      src={session.user.image}
                      alt="Profile"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <span className="hidden lg:inline text-dark dark:text-white">
                    {session.user?.name}
                  </span>
                </button>
                
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
                    <button
                      onClick={() => signOut()}
                      className="w-full text-left px-4 py-2 text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/signin"
                  className="text-dark hover:text-[#0B63E5] dark:text-white"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="rounded-lg bg-[#0B63E5] px-6 py-2 text-base font-medium text-white hover:bg-opacity-90"
                >
                  Sign Up
                </Link>
              </div>
            )} */}

            <ThemeToggler />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={`block rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
                navbarOpen && "navbarTogglerActive"
              }`}
            >
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
