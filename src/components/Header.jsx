import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a
        href="/"
        className="logo text-2xl font-bold text-accent hover:text-white"
      >
        ImageNjanjo
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#books">Books</a>
          </li>
          <li>
            <a href="/#videos">Videos</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={
          !toggle
            ? "mobile-nav left-[-100%]"
            : "relative z-20 mobile-nav left-0"
        }
      >
        <ul className="flex justify-center items-center flex-col">
          <li className="space-y-1.5 flex">
            <a href="/#about">About</a>
          </li>
          <li className="space-y-1.5 flex">
            <a href="/#books">Books</a>
          </li>
          <li className="space-y-1.5 flex">
            <a href="/#videos">Videos</a>
          </li>
          <li className="space-y-1.5 flex">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
