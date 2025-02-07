// Accordion-like FAQ section
import React from "react";
import { texts } from "./utilities/texts";
import Panel from "./Panel";

export default function Accordion({ theme }) {
  return (
    <React.Fragment>
      {Object.keys(texts).map((question) => {
        return (
          <Panel theme={theme} question={question} answer={texts[question]} />
        );
      })}
    </React.Fragment>
  );
}
