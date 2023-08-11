import { motion } from "framer-motion";
import { ReactNode } from "react";

type SpinProps = {
  children: ReactNode;
};

export default function Spin({ children }: SpinProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.6 }}
      whileHover={{
        rotate: [null, 360],
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      {children}
    </motion.div>
  );
}
