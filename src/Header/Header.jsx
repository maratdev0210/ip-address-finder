import React from "react";

export default function Header() {
  const links = {
    "#": "Home",
    "#findIp": "Find your IP",
    "#aboutIp": "What's IP?",
  };

  const navigationElements = Object.keys(links).map((link) => {
    return (
      <li>
        <a
          className="text-white text-2xl xl:text-3xl hover:text-white/50 hover:underline"
          href={link}
        >
          {links[link]}
        </a>
      </li>
    );
  });

  return (
    <section className="hover:cursor-pointer header bg-blue-700/90 w-full h-12 xl:h-16">
      <nav>
        <ul className="mx-auto list-none w-2/3 xl:w-2/3 xl:h-16  flex gap-5 justify-between h-12 items-center font-serif">
          {navigationElements}
        </ul>
      </nav>
    </section>
  );
}
