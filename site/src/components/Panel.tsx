import { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  styles?: string;
};

// grid container for items

export default function Panel({ children }: PanelProps) {
  return (
    <div
      className={`container mx-auto grid grid-cols-1 place-items-center h-screen md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3`}
    >
      {children}
    </div>
  );
}
