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
    title: "Inital add to website",
    body: "This is me adding Tune Transfer to my site. When I make any future changes to Tune Transfer I will document them here.",
    date: "08/25/2023",
    id: 1,
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
      description="What do you do when you switch music streaming services? Spend a few days manually transferring over each and every one of your playlists? Absolutely not! You spend a few weeks creating an application that does it for you! At least those were the thoughts that were going through my head when I created my first post-graduation project: Tune Transfer. Tune Transfer does exactly what it sounds like it does, transfers your tunes. Tune Transfer currently supports converting Spotify playlists to YouTube music playlists, although I plan to add more in future. If you need to to transfer your playlists, look no further!"
      accordionData={tuneAccordion}
      link="https://gitlab.com/jako1001/tune-transfer"
      linkIcon={<SiGitlab />}
    />
  );
}
