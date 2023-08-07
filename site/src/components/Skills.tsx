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

export default function Skills() {
  const skills = [
    <SiDjango size={80} />,
    <SiSpotify size={80} />,
    <SiYoutube size={80} />,
    <SiPython size={80} />,
    <SiReact size={80} />,
    <SiFastapi size={80} />,
    <SiJavascript size={80} />,
    <SiMongodb size={80} />,
    <SiRedux size={80} />,
  ];

  const renderedSkills = skills.map((skill, index) => {
    return (
      <span className="p-5" key={index}>
        {skill}
      </span>
    );
  });

  return (
    <section className="section is-medium has-text-centered">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="mt-6">{renderedSkills}</div>
      </div>
    </section>
  );
}
