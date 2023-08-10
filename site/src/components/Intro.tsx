import me from "../media/me.png";
import WriteText from "./WriteText";

export default function Intro() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <figure className="image is-square">
              <img src={me} />
            </figure>
          </div>
          <div className="column has-text-centered has-text-black">
            <WriteText />
          </div>
        </div>
      </div>
    </section>
  );
}
