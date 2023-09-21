import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type CardProps = {
  image: string;
  title: string;
  body: string;
  icons: ReactNode[];
  onClickPage: string;
};

export default function Card({
  image,
  title,
  body,
  icons,
  onClickPage,
}: CardProps) {
  const navigate = useNavigate();

  const renderedIcons = icons.map((icon, index) => {
    return (
      <span className="icon ml-2 mt-5" key={index}>
        {icon}
      </span>
    );
  });

  return (
    <>
      <a onClick={() => navigate(onClickPage)}>
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
          className="card is-clickable"
          style={{ height: "100%" }}
        >
          <div className="card-image">
            <figure className="image is-16by9">
              <img src={image} alt="project image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content has-text-left mb-3">
              <div className="media-left">
                <p className="title is-4">{title}</p>
              </div>
            </div>
            <div className="media-content has-text-left has-text-black">
              {body}
              <div className="has-text-right has-text-black">
                {renderedIcons}
              </div>
            </div>
          </div>
        </motion.div>
      </a>
    </>
  );
}
