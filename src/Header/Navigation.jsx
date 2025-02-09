import React from "react";

export default function Navigation({ navigationLinks, isOpen, setIsOpen }) {
  function handleLinkClick() {
    // close the burger menu if it's open and if the screen size is less than 560px, otherwise do nothing
    if (document.innerWidth <= 560) {
      setIsOpen(!isOpen);
    }
    return;
  }

  const navigationElements = Object.keys(navigationLinks).map((link) => {
    return (
      <li>
        <a
          className={`${isOpen ? "text-black" : "text-white"} text-2xl  xl:text-3xl hover:text-white/70 hover:underline`}
          href={link}
          onClick={handleLinkClick}
        >
          {navigationLinks[link]}
        </a>
      </li>
    );
  });

  return (
    <React.Fragment>
      <ul
        className={` ${isOpen ? "visible h-[80vh]" : "hidden"} flex gap-10 flex-col justify-center w-full mx-auto list-none sm:w-2/3
           xl:w-2/3 xl:h-16 sm:flex sm:flex-row sm:gap-5 sm:justify-between sm:h-12 items-center font-serif`}
      >
        {navigationElements}
      </ul>
    </React.Fragment>
  );
}
