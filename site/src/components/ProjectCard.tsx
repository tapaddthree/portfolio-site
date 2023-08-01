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
      className={`w-3/4 m-3 p-6 rounded-xl shadow-md hover:cursor-pointer hover:scale-105 ${cardConfig.bgColor}`}
      onClick={handleClick}
    >
      <a>
        <img
          className="mx-auto w-3/6 h-3/6 mb-3"
          src={cardConfig.image}
        ></img>
      </a>
      <span className="text-2xl font-bold">{title}</span>
      <div>{body}</div>
    </div>
  );
}
