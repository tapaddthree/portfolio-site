import {
  SiReact,
  SiTypescript,
  SiGithub,
  SiVite,
  SiBulma,
  SiDocker,
  SiGitlab,
  SiPython,
  SiFastapi,
  SiSpotify,
  SiYoutube,
  SiJavascript,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import animations from "./media/animations.gif";
import ttHome from "./media/tuneTransfer/ttHome.png";
import ppHome from "./media/portfolio/ppHome.png";
import wwHome from "./media/wealthWizard/wwHome.png";
import { AccordionData } from "./pages/ProjectPage";

// portfolio page data //
export const portfolioAccordion: AccordionData[] = [
  {
    title: "Animations",
    body: 'This project is my first crack at animations. I used the "framer-motion" react package to achieve my design.',
    img: animations,
    id: 2,
  },
  {
    title: "Accordion",
    body: 'This is the accordion you are using right now. It functions by using the index of the currently clicked on block to determine which block should be opened or closed. This can be seen on line 15, the "isExpanded" variable. If you click the same block or another block, the current block will close. If you clicked on a different accordion block, that block will open. See the "handleClick" function on line 4. The GitHub gist (code block) below is being displayed using the "react-embed-gist" package.',
    gistId: `${"jako1001"}/${"7a752f2f7a1ab115fa6a024190638e0e"}`,
    id: 1,
  },
];

export const portfolioSkills = [
  { icon: <SiDocker size={40} />, name: "Docker" },
  { icon: <SiBulma size={40} />, name: "Bulma" },
  { icon: <SiVite size={40} />, name: "Vite" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiTypescript size={40} />, name: "TypeScript" },
];

export const portfolioImages = ppHome;
export const portfolioDescription =
  "One day I figured it was probably a good idea to create a website to show off my projects and skills publicly. Shortly after I began working on the website you are on right now and I am very proud of it. It also feels pretty cool to have my own name on the web.";
export const portfolioLink = "https://github.com/jako1001/portfolio-site";
export const portfolioIcon = <SiGithub />;
// tune transfer data //
export const tuneAccordion: AccordionData[] = [
  {
    title: "Initial add to website",
    body: "This is me adding Tune Transfer to my site. When I make any future changes to Tune Transfer I will document them here.",
    id: 1,
  },
];

export const tuneSkills = [
  { icon: <SiGitlab size={40} />, name: "Gitlab" },
  { icon: <SiYoutube size={40} />, name: "YouTube" },
  { icon: <SiSpotify size={40} />, name: "Spotify" },
  { icon: <SiFastapi size={40} />, name: "Fastapi" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiPython size={40} />, name: "Python" },
  { icon: <SiJavascript size={40} />, name: "Javascript" },
];

export const tuneImages = ttHome;
export const tuneDescription =
  "What do you do when you switch music streaming services? Spend a few days manually transferring over each and every one of your playlists? Absolutely not! You spend a few weeks creating an application that does it for you! At least those were the thoughts that were going through my head when I created my first post-graduation project: Tune Transfer. Tune Transfer does exactly what it sounds like it does, transfers your tunes. Tune Transfer currently supports converting Spotify playlists to YouTube music playlists, although I plan to add more in future. If you need to to transfer your playlists, look no further!";
export const tuneLink = "https://gitlab.com/jako1001/tune-transfer";
export const tuneIcon = <SiGitlab />;

// wealth wizard data //
export const wizardAccordion: AccordionData[] = [
  {
    title: "Wealth Wizard",
    body: "I did accordion work",
    id: 1,
  },
];

export const wizardSkills = [
  { icon: <SiGitlab size={40} />, name: "Gitlab" },
  { icon: <SiDocker size={40} />, name: "Docker" },
  { icon: <SiMongodb size={40} />, name: "MongoDB" },
  { icon: <SiFastapi size={40} />, name: "FastAPI" },
  { icon: <SiRedux size={40} />, name: "Redux" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiPython size={40} />, name: "Python" },
  { icon: <SiJavascript size={40} />, name: "JavaScript" },
];

export const wizardImages = wwHome;
export const wizardDescription = "Wealth Wizard Description";
export const wizardLink = "https://gitlab.com/hrgroup4/wealth-wizard";
export const wizardIcon = <SiGitlab />;
