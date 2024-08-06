import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-scroll";
import { Button } from "../ui/button";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigates array
  const navItems = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    { name: "About", path: "about" },
    { name: "Products", path: "products" },
    { name: "Testimonials", path: "testimonials" },
    { name: "Faq", path: "faq" },
  ];

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <header className="w-full md:bg-transparent fixed top-0 left-0 right-0">
        <nav
          className={`py-4 lg:px-20 px-4 ${
            isSticky
              ? "sticky bg-white left-0 right-0 border-b duration-300 dark:bg-blue-400 shadow-md"
              : ""
          }`}
        >
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className="uppercase text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={Logo}
                className="w-10 inline-block dark:bg-white rounded-full"
                alt="NexusTech Logo"
              />{" "}
              <span>NexusTech</span>
            </a>

            <ul className="md:flex space-x-12 hidden ">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    smooth={true}
                    duration={500}
                    className="block text-base text-gray-900 hover:text-foreground cursor-pointer"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Btn for large device */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#"
                className="text-BrandPrimary hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-100"
              >
                Login
              </a>
              <Button
                variant="default"
                size="lg"
                className="dark:bg-white dark:hover:bg-white/90"
              >
                Sign Up
              </Button>
              <div className="absolute right-5">
                <ModeToggle />
              </div>
            </div>

            <div className="md:hidden flex">
              <Button
                variant="default"
                size="sm"
                onClick={toggleMenu}
                className="dark:bg-white text-3xl mr-16"
              >
                {isMenuOpen ? <HiOutlineXMark /> : <HiBars3BottomRight />}
              </Button>
              <div className="absolute right-4 -mt-1">
                <ModeToggle />
              </div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.3 }}
            className={`space-y-4 px-4 mt-[70px] py-7 bg-BrandPrimary ${
              isMenuOpen
                ? "block fixed top-0 left-0 right-0 z-10 md:hidden"
                : "hidden"
            }`}
          >
            {navItems.map(({ name, path }) => (
              <Link
                to={path}
                key={name}
                smooth={true}
                duration={500}
                className="block text-base text-white hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-900 hover:bg-white py-3 px-4 rounded-md cursor-pointer"
              >
                {name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-900 text-gray-100">
                Login
              </a>
              <Button
                variant="default"
                size="lg"
                className="bg-white hover:bg-white/90  text-gray-900 "
              >
                Sign Up
              </Button>
            </div>
          </motion.div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
