import { motion } from "framer-motion";
import dachie from "../media/dachie.jpg";
import Card from "./Card";

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <div className="box">
          <div className="has-text-centered title">My Work</div>
          <motion.div
            className="columns is-centered has-text-centered"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
          >
            <div className="column">
              <Card
                image={dachie}
                title="Dachie! Dachie!"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat quo voluptate tempore vitae explicabo iste ipsam nihil. Nemo, vero."
                date="July 2023"
              />
            </div>
            <div className="column">
              <Card
                image={dachie}
                title="Dachie! Dachie!"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat quo voluptate tempore vitae explicabo iste ipsam nihil. Nemo, vero."
                date="April 2023"
              />
            </div>
            <div className="column">
              <Card
                image={dachie}
                title="Dachie! Dachie!"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat quo voluptate tempore vitae explicabo iste ipsam nihil. Nemo, vero."
                date="March 2023"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
