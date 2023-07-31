type ProjectCardProps = {
  title: string;
  body: string;
  background: string;
};

export default function ProjectCard({
  title,
  body,
  background,
}: ProjectCardProps) {
  const cardConfig = {
    bgColor: background,
  };

  return (
    <>
      <div
        className={`w-3/6 m-6 p-6 rounded-xl shadow-md ${cardConfig.bgColor}`}
      >
        <span className="text-2xl font-bold">{title}</span>
        <div>{body}</div>
      </div>
    </>
  );
}
