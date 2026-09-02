"use client";

import { useEffect, useState } from "react";

export function Typewriter({ words }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [value, setValue] = useState("");

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
    <div className="flex items-center">
      <span className="mr-1 pointer-events-none whitespace-nowrap">
        Search your next destination,{" "}
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={text}
        className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-gray-400"
      />
    </div>
  );
}
