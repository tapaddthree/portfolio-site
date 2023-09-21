import ProjectDetail from "../components/ProjectDetail";
import { ReactNode } from "react";

export type AccordionData = {
  title: string;
  body: string;
  gistId?: `${string}/${string}`;
  img?: string;
  id: number;
};

type Skills = {
  icon: ReactNode;
  name: string;
};

export type ProjectPageProps = {
  title: string;
  skills: Skills[];
  images?: string;
  description: string;
  accordionData?: AccordionData[];
  repo: string;
  liveLink?: string;
};

export default function ProjectPage({
  title,
  images,
  description,
  repo,
  liveLink,
  accordionData,
  skills,
}: ProjectPageProps) {
  return (
    <ProjectDetail
      title={title}
      images={images}
      description={description}
      repo={repo}
      liveLink={liveLink}
      accordionData={accordionData}
      skills={skills}
    />
  );
}
