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
  images: string;
  description: string;
  accordionData: AccordionData[];
  link: string;
  linkIcon: ReactNode;
};

export default function ProjectPage({
  title,
  images,
  description,
  link,
  linkIcon,
  accordionData,
  skills,
}: ProjectPageProps) {
  return (
    <ProjectDetail
      title={title}
      images={images}
      description={description}
      link={link}
      linkIcon={linkIcon}
      accordionData={accordionData}
      skills={skills}
    />
  );
}
