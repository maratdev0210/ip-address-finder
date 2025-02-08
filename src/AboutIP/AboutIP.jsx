import React from "react";
import Accordion from "./Accordion";

// give the defintion of IP, why do we use it, provide links, etc.
export default function AboutIP({ theme }) {
  return (
    <section
      id="aboutIp"
      className={`${theme} hover:cursor-pointer dark:bg-black/90 my-5 py-5 bg-black/5 font-serif md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 mx-auto`}
    >
      <p className="dark:text-white text-center text-black text-2xl py-2 sm:text-4xl md:text-4xl md:py-4 xl:text-6xl xl:py-5">
        What's an IP
      </p>
      <p className="dark:text-white text-center text-md text-black sm:text-2xl md:text-2xl md:py-2 xl:text-4xl xl:py-3">
        Learn More about IP in this section
      </p>
      <div className="accordion my-5">
        <Accordion theme={theme} />
      </div>
    </section>
  );
}
