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
import Card from "./components/Card";
import wwHome from "./media/wealthWizard/wwHome.png";
import ttHome from "./media/tuneTransfer/ttHome.png";
import ccHome from "./media/carCar/ccHome.png";
import { motion } from "framer-motion";

const projectsArray = [
  <Card
    image={ttHome}
    title="Tune Transfer"
    body="Cutting edge music utility to seamlessly convert your music playlists between streaming services"
    icons={[
      <SiYoutube size={30} />,
      <SiSpotify size={30} />,
      <SiFastapi size={30} />,
      <SiReact size={30} />,
      <SiPython size={30} />,
      <SiJavascript size={30} />,
    ]}
    link="https://gitlab.com/jako1001/tune-transfer"
  />,
  <Card
    image={wwHome}
    title="Wealth Wizard"
    body="Real-time stock portfolio simulation tool using the Yahoo! Finance API"
    icons={[
      <SiMongodb size={30} />,
      <SiFastapi size={30} />,
      <SiRedux size={30} />,
      <SiReact size={30} />,
      <SiPython size={30} />,
      <SiJavascript size={30} />,
    ]}
    link="https://hrgroup4.gitlab.io/wealth-wizard/"
  />,
  <Card
    image={ccHome}
    title="CarCar"
    body="Application for management of car a dealership's sales and service"
    icons={[
      <SiDjango size={30} />,
      <SiReact size={30} />,
      <SiPython size={30} />,
      <SiJavascript size={30} />,
    ]}
    link="https://gitlab.com/jako1001/project-beta"
  />,
];

export const projects = projectsArray.map((project, index) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="column"
    >
      {project}
    </motion.div>
  );
});
