"use client";

import { useEffect, useState } from "react";

export function Typewriter({ words }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    let timeout;

    const currentWord = words[wordIndex];

    if (text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, words]);

  return (
    <span
      className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 text-slate-400"
      onClick={() => showInput(true)}
    >
      Search your next destination,{" "}
      <span className="font-medium">
        {text}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  );
}
