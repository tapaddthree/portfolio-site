import { useState } from "react";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";
import ReactEmbedGist from "react-embed-gist";

interface AccordionItems {
  id: number;
  title: string;
  body: string;
  gistId?: `${string}/${string}`;
}

type AccordionProps = {
  accordionData: AccordionItems[];
};

export default function Accordion({ accordionData }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex: number) => {
    setExpandedIndex((current) => {
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
        style={{
          boxShadow: "3px 3px #444443",
          borderStyle: "solid",
          borderColor: "#444443",
          borderWidth: "2px",
        }}
      >
        <div className="columns is-mobile">
          <div className="column">{accordion.title}</div>
          <div className="column has-text-right">{icon}</div>
        </div>
        {isExpanded && (
          <div className="has-text-weight-normal">
            {accordion.body}
            {accordion.gistId && (
              <div className="content pt-2">
                <ReactEmbedGist gist={accordion.gistId} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  });

  return <>{renderedItems}</>;
}
