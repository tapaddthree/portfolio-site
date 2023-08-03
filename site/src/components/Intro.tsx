import me from "../media/me.png";

export default function Intro() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <figure className="image is-1by1">
              <img className="has-text-centered" src={me} />
            </figure>
          </div>
          <div className="column has-text-centered">
            <h1 className="is-size-1 title">Hi,</h1>
            <h1 className="is-size-1 title">I'm Jakob</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
