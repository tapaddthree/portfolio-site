import { ReactNode } from "react";
import classNames from "classnames";

type PanelProps = {
  children: ReactNode;
  className?: string;
  projectCard?: boolean;
  technology?: boolean;
};

// grid container for items

export default function Panel({
  children,
  className,
  projectCard,
  technology,
}: PanelProps) {
  const classes = classNames(className, {
    "container mx-auto grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3":
      projectCard,
    "container mx-auto grid grid-cols-3 place-items-center": technology,
  });

  return <div className={classes}>{children}</div>;
}
