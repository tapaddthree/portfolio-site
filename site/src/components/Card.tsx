import { motion } from "framer-motion";

export default function Card({ image, title, body, date }) {
  return (
    <motion.div
      className="card is-clickable"
      whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
    >
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image" />
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
          <p>{date}</p>
        </div>
      </div>
    </motion.div>
  );
}
