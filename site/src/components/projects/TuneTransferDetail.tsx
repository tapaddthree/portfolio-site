import ProjectDetail from "../ProjectDetail";
import ttHome from "../../media/tuneTransfer/ttHome.png";
import {
  SiGitlab,
  SiPython,
  SiReact,
  SiFastapi,
  SiSpotify,
  SiYoutube,
  SiJavascript,
} from "react-icons/si";

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

const tuneSkills = [
  { icon: <SiGitlab size={40} />, name: "Gitlab" },
  { icon: <SiYoutube size={40} />, name: "YouTube" },
  { icon: <SiSpotify size={40} />, name: "Spotify" },
  { icon: <SiFastapi size={40} />, name: "Fastapi" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiPython size={40} />, name: "Python" },
  { icon: <SiJavascript size={40} />, name: "Javascript" },
];

export default function TuneTransferDetail() {
  return (
    <ProjectDetail
      title="Tune Transfer"
      skills={tuneSkills}
      images={ttHome}
      description="Tune Transfer Description"
      accordionData={tuneAccordion}
      link="https://gitlab.com/jako1001/tune-transfer"
      linkIcon={<SiGitlab />}
    />
  );
}
