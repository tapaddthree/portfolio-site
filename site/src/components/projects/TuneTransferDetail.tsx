import ProjectDetail from "../ProjectDetail";
import ttHome from "../../media/tuneTransfer/ttHome.png";

const tuneAccordion = [
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

// const tuneSkills = [
//   { icon: <SiGithub size={40} />, name: "Github" },
//   { icon: <SiDocker size={40} />, name: "Docker" },
//   { icon: <SiTypescript size={40} />, name: "TypeScript" },
//   { icon: <SiReact size={40} />, name: "React" },
//   { icon: <SiBulma size={40} />, name: "Bulma" },
//   { icon: <SiVite size={40} />, name: "Vite" },
// ];

export default function TuneTransferDetail() {
  return (
    <ProjectDetail
      title="Tune Transfer"
      skills={tuneSkills}
      images={ttHome}
      description="Tune Transfer Description"
      accordionData={tuneAccordion}
    />
  );
}
