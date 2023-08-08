import { motion, useTransform } from "framer-motion";
import placeholder from "../media/placeholder.png";
import ttHome from "../media/tuneTransfer/ttHome.png";
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
import { useScroll } from "framer-motion";
import { useRef, MutableRefObject } from "react";

export default function Projects() {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section ref={ref} className="section has-background-primary">
      <div className="container">
        <div className="box">
          <div className="has-text-centered title">My Work</div>
          <motion.div
            className="columns is-centered has-text-centered"
            initial={{ opacity: 0 }}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            <div className="column">
              <Card
                image={ttHome}
                title="Tune Transfer"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat quo voluptate tempore vitae explicabo iste ipsam nihil. Nemo, vero."
                icons={[
                  <SiYoutube size={30} />,
                  <SiSpotify size={30} />,
                  <SiFastapi size={30} />,
                  <SiReact size={30} />,
                  <SiPython size={30} />,
                  <SiJavascript size={30} />,
                ]}
                link="https://gitlab.com/jako1001/tune-transfer"
              />
            </div>
            <div className="column">
              <Card
                image={placeholder}
                title="Wealth Wizard"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat quo voluptate tempore vitae explicabo iste ipsam nihil. Nemo, vero."
                icons={[
                  <SiMongodb size={30} />,
                  <SiFastapi size={30} />,
                  <SiRedux size={30} />,
                  <SiReact size={30} />,
                  <SiPython size={30} />,
                  <SiJavascript size={30} />,
                ]}
                link="https://hrgroup4.gitlab.io/wealth-wizard/"
              />
            </div>
            <div className="column">
              <Card
                image={placeholder}
                title="CarCar"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat quo voluptate tempore vitae explicabo iste ipsam nihil. Nemo, vero."
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
