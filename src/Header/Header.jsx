import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const colorModes = {
  0: "dark",
  1: "light",
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleMode, setToggleMode] = useState(0); // 0 is for dark mode, 1 is for white mode

  const links = {
    "#": "Home",
    "#findIp": "Find your IP",
    "#aboutIp": "What's IP?",
  };

  // doesn't allow style-imposed bugs when the screen changes
  window.addEventListener("resize", (event) =>
    event.target.innerWidth >= 560 ? setIsOpen(false) : null
  );

  const navigationElements = Object.keys(links).map((link) => {
    return (
      <li>
        <a
          className="text-black dark:text-white text-2xl xl:text-3xl hover:text-white/50 hover:underline"
          href={link}
          onClick={() => setIsOpen(!isOpen)}
        >
          {links[link]}
        </a>
      </li>
    );
  });

  // TO-DO: find a better way for writing styles using Tailwind
  return (
    <section
      className={` ${colorModes[toggleMode] == "light" ? "dark" : "light"} ${isOpen ? "h-lvh bg-white absolute" : "bg-blue-700/90"} dark:bg-black hover:cursor-pointer header sm:bg-blue-700/90 w-full sm:h-12 xl:h-16`}
    >
      <nav className={`justify-between ${isOpen ? "block" : "flex"}`}>
        <div className="menuBurger sm:hidden h-12 px-1 items-center flex">
          <CiMenuBurger
            onClick={() => setIsOpen(!isOpen)}
            className={`${isOpen ? "text-black" : "text-white"} dark:text-white text-4xl`}
          />
        </div>
        <ul
          className={` ${isOpen ? "visible h-[80vh]" : "hidden"} flex gap-10 flex-col justify-center w-full mx-auto list-none sm:w-2/3
           xl:w-2/3 xl:h-16 sm:flex sm:flex-row sm:gap-5 sm:justify-between sm:h-12 items-center font-serif`}
        >
          {navigationElements}
        </ul>
        {isOpen == false ? (
          <div className="color-mode flex items-center px-3">
            <span
              className="text-white text-md font-serif sm:text-2xl xl:text-3xl"
              onClick={() => setToggleMode(1 - toggleMode)}
            >
              Enable {colorModes[toggleMode]} Mode
            </span>
          </div>
        ) : null}
      </nav>
    </section>
  );
}
