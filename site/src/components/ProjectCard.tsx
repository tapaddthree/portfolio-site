type ProjectCardProps = {
  title: string;
  body: string;
  background: string;
  image: string;
};

export default function ProjectCard({
  title,
  body,
  background,
  image,
}: ProjectCardProps) {
  const cardConfig = {
    bgColor: background,
    image,
  };

  const handleClick = () => {
    console.log("Clicked on project");
  };

  return (
    <div
      className={`w-4/5 m-3 p-6 rounded-xl shadow-md hover:cursor-pointer hover:scale-105 ${cardConfig.bgColor}`}
      onClick={handleClick}
    >
      <img className="mx-auto mb-3 w-48 h-40" src={cardConfig.image}></img>
      <span className="text-2xl font-bold">{title}</span>
      <div>{body}</div>
    </div>
  );
}
