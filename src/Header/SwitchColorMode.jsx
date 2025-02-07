import React from "react";
import { useEffect } from "react";

// a text being put on top of page's header that acts as a switch between dark/light theme of a webpage
export default function SwitchColorMode({
  colorModes,
  isOpen,
  toggleMode,
  setToggleMode,
}) {
  // change color mode every time the user clicks on a text
  useEffect(() => {
    localStorage.setItem("themeMode", toggleMode == 0 ? "dark" : "light");
  });

  return (
    <React.Fragment>
      {!isOpen ? (
        <div className="color-mode flex items-center px-3">
          <span
            className="text-white text-md font-serif sm:text-xl xl:text-3xl"
            onClick={() => setToggleMode(1 - toggleMode)}
          >
            Enable {colorModes[toggleMode]} Mode
          </span>
        </div>
      ) : null}
    </React.Fragment>
  );
}
