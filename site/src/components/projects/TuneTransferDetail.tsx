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

export default function TuneTransferDetail() {
  return (
    <ProjectDetail
      title="Tune Transfer"
      skills="Skills Placeholder"
      images={ttHome}
      description="Tune Transfer Description"
      accordionData={tuneAccordion}
    />
  );
}
