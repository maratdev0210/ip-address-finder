import React from "react";

// a text being put on top of page's header that acts as a switch between dark/light theme of a webpage
export default function SwitchColorMode({
  colorModes,
  isOpen,
  toggleMode,
  setToggleMode,
  setTheme,
}) {
  function onToggleMode() {
    setToggleMode(1 - toggleMode);
    setTheme(colorModes[toggleMode]); // light | dark theme; if toggleMode is 0 then light, else dark
  }

  return (
    <React.Fragment>
      {!isOpen ? (
        <div className="color-mode flex items-center px-3">
          <span
            className="text-white text-md font-serif sm:text-xl xl:text-3xl"
            onClick={onToggleMode}
          >
            Enable {colorModes[toggleMode]} Mode
          </span>
        </div>
      ) : null}
    </React.Fragment>
  );
}
