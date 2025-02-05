import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
          className="text-white text-2xl xl:text-3xl hover:text-white/50 hover:underline"
          href={link}
          onClick={() => setIsOpen(!isOpen)}
        >
          {links[link]}
        </a>
      </li>
    );
  });

  return (
    <section
      className={`${isOpen ? "h-lvh bg-black absolute" : "bg-blue-700/90"} hover:cursor-pointer header sm:bg-blue-700/90 w-full sm:h-12 xl:h-16`}
    >
      <nav>
        <div className="menuBurger sm:hidden h-12 px-1 items-center flex ">
          <CiMenuBurger
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-4xl "
          />
        </div>
        <ul
          className={` ${isOpen ? "visible h-[80vh]" : "hidden"} flex gap-10 flex-col justify-center w-full mx-auto list-none sm:w-2/3 xl:w-2/3 xl:h-16 sm:flex sm:flex-row sm:gap-5 sm:justify-between sm:h-12 items-center font-serif`}
        >
          {navigationElements}
        </ul>
      </nav>
    </section>
  );
}


