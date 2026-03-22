import { useState, useEffect } from "react";

export default function useTyping({ text = "", speed = 100, loop = false }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (loop) {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, loop]);

  return displayedText;
}