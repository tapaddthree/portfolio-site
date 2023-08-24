import ProjectDetail from "../ProjectDetail";
import wwHome from "../../media/wealthWizard/wwHome.png";

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

export default function WizardDetail() {
  return (
    <ProjectDetail
      title="Wealth Wizard"
      skills="Skills Placeholder"
      images={wwHome}
      description="Wealth Wizard Description"
      accordionData={wizardAccordion}
    />
  );
}
