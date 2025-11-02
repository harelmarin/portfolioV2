'use client'
import React from 'react';

interface TypewriterProps {
  words: string[];
}

const Typewriter = ({ words }: TypewriterProps) => {
  const [index, setIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState('');
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    let timeout: any;
    const current = words[index % words.length];

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        70,
      );
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        30,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1100);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((idx) => (idx + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="font-spacemono border-r-[1px] border-[#d4af37]/60 pr-2">
      {displayed}
    </span>
  );
};

export default Typewriter;
