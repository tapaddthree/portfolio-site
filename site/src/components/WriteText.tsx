import { motion } from "framer-motion";
import { sentence, letter } from "../animations";

export default function WriteText() {
  const line1: string = "Hi,";
  const line2: string = "I'm Jakob.";
  const line3: string = "Nice to meet you.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.45 }}
      viewport={{ once: false }}
    >
      <motion.h1
        className="is-size-1 title"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {line1.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {line2.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {line3.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
    </motion.div>
  );
}
