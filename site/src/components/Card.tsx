import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardProps = {
  image: string;
  title: string;
  body: string;
  icons: ReactNode[];
  link: string;
};

export default function Card({
  image,
  title,
  body,
  icons,
  link,
}: CardProps) {
  const renderedIcons = icons.map((icon, index) => {
    return (
      <span className="icon ml-2 mt-5" key={index}>
        {icon}
      </span>
    );
  });

  const handleCardClick = () => {};

  return (
    <a href={link}>
      <motion.div
        className="card is-clickable"
        onClick={handleCardClick}
        whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
      >
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="project image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="media-content has-text-left">
            {body}
            <p className="has-text-right">{renderedIcons}</p>
          </div>
        </div>
      </motion.div>
    </a>
  );
}
