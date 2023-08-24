import { MutableRefObject } from "react";

export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.12,
    },
  },
};

export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const scrollToBottom = (e: MutableRefObject<HTMLDivElement>) => {
  if (!e) return;

  e.current.scrollIntoView({
    behavior: "smooth",
  });
};

export const scrollToTop = (e: MutableRefObject<HTMLDivElement>) => {
  if (!e) return;

  e.current.scrollIntoView({
    behavior: "smooth",
  });
};

export const pageFadeIn = {
  initial: { opacity: 0, x: -2000 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: { opacity: 0, x: -100, transition: { duration: 0.75 } },
};
