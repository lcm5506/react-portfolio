import React, { useState, useEffect } from "react";
import "./Typing.css";

const STATE = {
  TYPING: "typing",
  IDLING: "idling",
  DELETING: "deleting",
};

const useTyping = (contents, startingDelay, deletingDelay) => {
  const [text, setText] = useState("");
  const [state, setState] = useState(STATE.IDLING);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    switch (state) {
      case STATE.TYPING: {
        if (text === contents[index]) {
          timeout = setTimeout(() => setState(STATE.DELETING), deletingDelay);
        } else {
          timeout = setTimeout(() => {
            setText(contents[index].slice(0, text.length + 1));
          }, Math.random() * 200 + 40);
        }
        return () => clearTimeout(timeout);
      }
      case STATE.IDLING: {
        timeout = setTimeout(() => setState(STATE.TYPING), startingDelay);
        break;
      }
      case STATE.DELETING: {
        if (!text.length) {
          if (index === contents.length - 1) setIndex(0);
          else setIndex((prev) => prev + 1);
          timeout = setTimeout(() => {
            setState(STATE.IDLING);
          }, 100);
        } else {
          timeout = setTimeout(
            () => setText(text.slice(0, text.length - 1)),
            Math.random() * 100 + 10
          );
        }

        return () => clearTimeout(timeout);
      }
      default: {
        if (text === contents[index]) {
          timeout = setTimeout(() => setState(STATE.DELETING), deletingDelay);
        } else {
          timeout = setTimeout(() => {
            setText(contents[index].slice(0, text.length + 1));
          }, Math.random() * 200 + 40);
        }
        return () => clearTimeout(timeout);
      }
    }
  }, [state, text]);
  return text;
};

function Typing(props) {
  const { content, startingDelay, deletingDelay } = props;
  const text = useTyping(content, startingDelay, deletingDelay);
  return (
    <>
      <span className="typing-animation">{text}</span>
    </>
  );
}

export default Typing;
