import classNames from "classnames";

type TechnologyProps = {
  python?: boolean;
  react?: boolean;
  typeScript?: boolean;
  javaScript?: boolean;
  mongoDB?: boolean;
  fastAPI?: boolean;
  docker?: boolean;
  django?: boolean;
  html5?: boolean;
};

export default function Technology({
  python,
  react,
  typeScript,
  javaScript,
  mongoDB,
  fastAPI,
  docker,
  django,
  html5,
}: TechnologyProps) {
  const source = classNames({
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg":
      python,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg":
      react,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg":
      typeScript,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg":
      javaScript,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg":
      mongoDB,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg":
      fastAPI,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg":
      docker,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg":
      django,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg":
      html5,
  });

  return <img className="w-4/5 m-2 p-3 hover:scale-105" src={source} />;
}
