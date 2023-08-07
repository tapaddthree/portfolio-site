import { motion } from "framer-motion";
import placeholder from "../media/placeholder.png";
import Card from "./Card";
import {
  SiDjango,
  SiSpotify,
  SiYoutube,
  SiPython,
  SiReact,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

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
                image={placeholder}
                title="Tune Transfer"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat quo voluptate tempore vitae explicabo iste ipsam nihil. Nemo, vero."
                date="July 2023"
                icons={[
                  <SiYoutube size={30} />,
                  <SiSpotify size={30} />,
                  <SiFastapi size={30} />,
                  <SiReact size={30} />,
                  <SiPython size={30} />,
                  <SiJavascript size={30} />,
                ]}
              />
            </div>
            <div className="column">
              <Card
                image={placeholder}
                title="Wealth Wizard"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat quo voluptate tempore vitae explicabo iste ipsam nihil. Nemo, vero."
                date="April 2023"
                icons={[
                  <SiMongodb size={30} />,
                  <SiFastapi size={30} />,
                  <SiRedux size={30} />,
                  <SiReact size={30} />,
                  <SiPython size={30} />,
                  <SiJavascript size={30} />,
                ]}
              />
            </div>
            <div className="column">
              <Card
                image={placeholder}
                title="CarCar"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat quo voluptate tempore vitae explicabo iste ipsam nihil. Nemo, vero."
                date="March 2023"
                icons={[
                  <SiDjango size={30} />,
                  <SiReact size={30} />,
                  <SiPython size={30} />,
                  <SiJavascript size={30} />,
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
