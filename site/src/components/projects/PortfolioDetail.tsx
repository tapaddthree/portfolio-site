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
    date: "placeholder",
    id: 1,
  },
];

const portfolioSkills = [
  { icon: <SiDocker size={40} />, name: "Docker" },
  { icon: <SiBulma size={40} />, name: "Bulma" },
  { icon: <SiVite size={40} />, name: "Vite" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiTypescript size={40} />, name: "TypeScript" },
];

export default function PortfolioDetail() {
  return (
    <ProjectDetail
      title="My Portfolio"
      skills={portfolioSkills}
      images={ppHome}
      description="One day I figured it was probably a good idea to create a website to show off my projects and skills publicly. Shortly after I began working on the website you are on right now and it looks pretty fantastic if I do say so myself. I am very proud of it. It also feels pretty cool to have my own name on the web."
      accordionData={portfolioAccordion}
      link="https://github.com/jako1001/portfolio-site"
      linkIcon={<SiGithub />}
    />
  );
}
