// Accordion-like FAQ section
import React from "react";
import { texts } from "./utilities/texts";
import Panel from "./Panel";

export default function Accordion() {
  return (
    <React.Fragment>
      {Object.keys(texts).map((question) => {
        return <Panel question={question} answer={texts[question]} />;
      })}
    </React.Fragment>
  );
}
