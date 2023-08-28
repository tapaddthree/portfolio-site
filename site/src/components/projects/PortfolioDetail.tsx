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
    title: "is reverse working?",
    body: "This is me adding my Portfolio to my site. When I make any future changes to my Portfolio I will document them here.",
    date: "08/24/2023",
    id: 3,
  },
  {
    title: "Accordion Work",
    body: 'Spent some time working on the accordion you are using right now. It functions by using the index of the currently clicked on block to determine which block should be opened or closed. This can be seen on line 15, the "isExpanded" variable. If you click the same block or another block, the current block will close. If you clicked on a different accordion block, that block will open. See the "handleClick" function on line 4.',
    date: "08/24/2023",
    gistId: `${"jako1001"}/${"7a752f2f7a1ab115fa6a024190638e0e"}`,
    id: 2,
  },
  {
    title: "Initial add to website",
    body: "This is me adding my Portfolio to my site. When I make any future changes to my Portfolio I will document them here.",
    date: "08/24/2023",
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
