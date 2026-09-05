import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
  showCursor?: boolean;
  className?: string;
  cursorClassName?: string;
}

export function Typewriter({
  words,
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseTime = 2500,
  loop = true,
  showCursor = true,
  className = "",
  cursorClassName = "inline-block w-[2px] h-[1.1em] bg-[color:var(--color-accent)] ml-1 align-middle animate-pulse",
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const currentWord = words[wordIndex % words.length];

    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = window.setTimeout(() => {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === currentWord) {
      if (loop || wordIndex < words.length - 1) {
        timer = window.setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime, loop]);

  return (
    <span className={`inline-flex items-center tracking-wide ${className}`}>
      <span className="inline-block font-medium">{currentText}</span>
      {showCursor && (
        <span aria-hidden="true" className={cursorClassName} />
      )}
    </span>
  );
}