import { useState } from "react";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";

interface AccordionItems {
  id: number;
  title: string;
  body: string;
}

type AccordionProps = {
  accordionData: AccordionItems[];
};

export default function Accordion({ accordionData }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex: number) => {
    setExpandedIndex((current) => {
      console.log(current);
      if (current === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = accordionData.map((accordion, index) => {
    const isExpanded = index === expandedIndex;

    const icon = isExpanded ? <FaChevronDown /> : <FaChevronLeft />;

    return (
      <div
        onClick={() => handleClick(index)}
        key={accordion.id}
        className="box has-text-weight-bold has-background-grey-light"
      >
        <div className="columns">
          <div className="column">{accordion.title}</div>
          <div className="column has-text-right">{icon}</div>
        </div>
        {isExpanded && (
          <div className="has-text-weight-normal">{accordion.body}</div>
        )}
      </div>
    );
  });

  return <div className="box">{renderedItems}</div>;
}
