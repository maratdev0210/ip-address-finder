import React from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function BurgerMenu({ isOpen, setIsOpen }) {
  return (
    <React.Fragment>
      <div className="burger-menu sm:hidden h-12 px-1 items-center flex">
        <CiMenuBurger
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? "text-black" : "text-white"} dark:text-white text-4xl`}
        />
      </div>
    </React.Fragment>
  );
}
