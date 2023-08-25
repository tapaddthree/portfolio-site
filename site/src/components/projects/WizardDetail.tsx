import ProjectDetail from "../ProjectDetail";
import wwHome from "../../media/wealthWizard/wwHome.png";
import {
  SiGitlab,
  SiDocker,
  SiMongodb,
  SiFastapi,
  SiRedux,
  SiReact,
  SiPython,
  SiJavascript,
} from "react-icons/si";

const wizardAccordion = [
  {
    title: "Wealth Wizard",
    body: "I did accordion work",
    id: 1,
  },
  {
    title: "What I did today, Aug. 25",
    body: "I did accordion work",
    id: 2,
  },
];

const wizardSkills = [
  { icon: <SiGitlab size={40} />, name: "Gitlab" },
  { icon: <SiDocker size={40} />, name: "Docker" },
  { icon: <SiMongodb size={40} />, name: "MongoDB" },
  { icon: <SiFastapi size={40} />, name: "FastAPI" },
  { icon: <SiRedux size={40} />, name: "Redux" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiPython size={40} />, name: "Python" },
  { icon: <SiJavascript size={40} />, name: "JavaScript" },
];

export default function WizardDetail() {
  return (
    <ProjectDetail
      title="Wealth Wizard"
      skills={wizardSkills}
      images={wwHome}
      description="Wealth Wizard Description"
      accordionData={wizardAccordion}
      link="https://gitlab.com/hrgroup4/wealth-wizard"
      linkIcon={<SiGitlab />}
    />
  );
}
