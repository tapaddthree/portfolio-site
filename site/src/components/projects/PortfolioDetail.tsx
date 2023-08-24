import ProjectDetail from "../ProjectDetail";
import ppHome from "../../media/portfolio/ppHome.png";
import {
  SiReact,
  SiTypescript,
  SiGithub,
  SiVite,
  SiBulma,
  SiDocker,
} from "react-icons/si";

const portfolioAccordion = [
  {
    title: "Tune Transfer",
    body: "I did accordion work",
    id: 1,
  },
  {
    title: "What I did today, Aug. 25",
    body: "I did accordion work",
    id: 2,
  },
];

const portfolioSkills = [
  { icon: <SiGithub size={40} />, name: "Github" },
  { icon: <SiDocker size={40} />, name: "Docker" },
  { icon: <SiTypescript size={40} />, name: "TypeScript" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiBulma size={40} />, name: "Bulma" },
  { icon: <SiVite size={40} />, name: "Vite" },
];

export default function PortfolioDetail() {
  return (
    <ProjectDetail
      title="My Portfolio"
      skills={portfolioSkills}
      images={ppHome}
      description="Portfolio Project Description"
      accordionData={portfolioAccordion}
    />
  );
}
