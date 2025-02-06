// implementst the FAQ accordion-styled answers (aka revealing the answer when clicked on a question)
import { useState } from "react";
import { FaQuestion } from "react-icons/fa";

export default function Panel({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <p
        className="text-black border-1 flex gap-2 items-center w-5/6 sm:w-2/3 sm:text-xl 2xl:text-2xl mx-auto my-2 text-md font-bold py-1 px-2"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="questionMark">
          <FaQuestion className="text-black/60 text-md" />
        </div>
        {question}
      </p>
      {showAnswer && (
        <p className="px-2 text-md italic w-5/6 sm:w-2/3 2xl:text-md mx-auto">
          {answer}
        </p>
      )}
    </>
  );
}
