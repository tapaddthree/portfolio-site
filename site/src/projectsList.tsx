import {
  SiSpotify,
  SiYoutube,
  SiPython,
  SiReact,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiBulma,
  SiDocker,
  SiVite,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import Card from "./components/Card";
import wwHome from "./media/wealthWizard/wwHome.png";
import ttHome from "./media/tuneTransfer/ttHome.png";
import ppHome from "./media/portfolio/ppHome.png";
import { motion } from "framer-motion";

const projectsArray = [
  <Card
    image={ttHome}
    title="Tune Transfer"
    body="Music utility to seamlessly convert your music playlists between streaming services"
    icons={[
      <SiGitlab size={30} />,
      <SiYoutube size={30} />,
      <SiSpotify size={30} />,
      <SiFastapi size={30} />,
      <SiReact size={30} />,
      <SiPython size={30} />,
      <SiJavascript size={30} />,
    ]}
    onClickPage="/tune"
  />,
  <Card
    image={ppHome}
    title="My Portfolio"
    body="This is the portfolio that you are currently looking at. Wow, that's a brain twister"
    icons={[
      <SiGithub size={30} />,
      <SiDocker size={30} />,
      <SiBulma size={30} />,
      <SiVite size={30} />,
      <SiReact size={30} />,
      <SiTypescript size={30} />,
    ]}
    onClickPage="/portfolio"
  />,
  <Card
    image={wwHome}
    title="Wealth Wizard"
    body="Real-time stock portfolio simulation tool using the Yahoo! Finance API"
    icons={[
      <SiGitlab size={30} />,
      <SiDocker size={30} />,
      <SiMongodb size={30} />,
      <SiFastapi size={30} />,
      <SiRedux size={30} />,
      <SiReact size={30} />,
      <SiPython size={30} />,
      <SiJavascript size={30} />,
    ]}
    onClickPage="/wizard"
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
