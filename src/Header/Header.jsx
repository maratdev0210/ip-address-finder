import React from "react";
import { useState } from "react";

import { colorModes } from "./utilities/colorModes";
import { navigationLinks } from "./utilities/navigationLinks";

import Navigation from "./Navigation";
import SwitchColorMode from "./SwitchColorMode";
import BurgerMenu from "./BurgerMenu";

export default function Header({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleMode, setToggleMode] = useState(0); // 0 is for dark mode, 1 is for white mode

  // doesn't allow style-imposed bugs when the screen changes
  window.addEventListener("resize", (event) =>
    event.target.innerWidth >= 560 ? setIsOpen(false) : null
  );

  // TO-DO: find a better way for writing styles using Tailwind
  return (
    <section
      className={`${theme} ${isOpen ? "h-[100vh] top-0 left-0 bottom-0 right-0 w-full z-100 bg-white fixed" : "bg-blue-700/90"} dark:bg-black hover:cursor-pointer header sm:bg-blue-700/100 w-full fixed z-100 sm:h-12 xl:h-16`}
    >
      <nav className={`justify-between ${isOpen ? "block" : "flex"}`}>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <Navigation
          navigationLinks={navigationLinks}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <SwitchColorMode
          colorModes={colorModes}
          isOpen={isOpen}
          toggleMode={toggleMode}
          setToggleMode={setToggleMode}
          setTheme={setTheme}
        />
      </nav>
    </section>
  );
}
