import { useRef } from "react";
import { useEffect } from "react";

// a helper function returning the theme mode of a webpage
export default function determineMode() {
  const mode = useRef(localStorage.getItem("themeMode")); // dark | light

  // change the mode everytime the user clicks on a text 'enable dark | light' color mode
  useEffect(() => {
    mode.current = localStorage.getItem("themeMode");
  });

  return mode.current;
}
