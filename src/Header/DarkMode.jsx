import React from "react";

export default function DarkMode({
  colorModes,
  isOpen,
  toggleMode,
  setToggleMode,
}) {
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
