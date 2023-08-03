import me from "../media/me.png";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <motion.div
            className="column has-text-centered"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
              delay: 1.8,
            }}
          >
            <figure className="image is-square">
              <img src={me} />
            </figure>
          </motion.div>
          <div className="column has-text-centered">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
              }}
            >
              <h1 className="is-size-1 title">Hi,</h1>
              <h1 className="is-size-1 title">I'm Jakob</h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
